import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as cloudflare from "@pulumi/cloudflare";
import * as command from "@pulumi/command";

const config = new pulumi.Config();
const domainName = "quent-tech.com";
const wwwDomainName = `www.${domainName}`;
const apiDomainName = `api.${domainName}`;
const notificationEmail = "info@quent-tech.com";

// =============================================================================
// Cloudflare Provider
// =============================================================================

const cfConfig = new pulumi.Config("cloudflare");
const cfAccountId = cfConfig.require("account_id");
const cfApiToken = cfConfig.requireSecret("apiToken");

const cfProvider = new cloudflare.Provider("cf-provider", {
  apiToken: cfApiToken,
});

// =============================================================================
// Cloudflare Zone
// =============================================================================

const zone = new cloudflare.Zone("zone", {
  account: { id: cfAccountId },
  name: domainName,
}, { provider: cfProvider });

// =============================================================================
// Cloudflare Pages Project
// =============================================================================

const pagesProject = new cloudflare.PagesProject("pages-project", {
  accountId: cfAccountId,
  name: "quent-tech",
  productionBranch: "main",
  source: {
    type: "github",
    config: {
      owner: "4art",
      repoName: "quent-tech-monorepo",
      productionBranch: "main",
      deploymentsEnabled: true,
      productionDeploymentsEnabled: true,
      previewDeploymentSetting: "none",
    },
  },
  buildConfig: {
    buildCommand: "cd website && npm run build",
    destinationDir: "website/out",
  },
}, { provider: cfProvider });

// Custom domains for Pages
const pagesApexDomain = new cloudflare.PagesDomain("pages-apex-domain", {
  accountId: cfAccountId,
  projectName: pagesProject.name,
  name: domainName,
}, { provider: cfProvider });

const pagesWwwDomain = new cloudflare.PagesDomain("pages-www-domain", {
  accountId: cfAccountId,
  projectName: pagesProject.name,
  name: wwwDomainName,
}, { provider: cfProvider });

// =============================================================================
// DNS Records
// =============================================================================

// Apex → Cloudflare Pages (CNAME flattened)
const apexRecord = new cloudflare.Record("apex-record", {
  zoneId: zone.id,
  name: "@",
  type: "CNAME",
  content: "quent-tech.pages.dev",
  proxied: true,
  ttl: 1,
}, { provider: cfProvider });

// www → Cloudflare Pages
const wwwRecord = new cloudflare.Record("www-record", {
  zoneId: zone.id,
  name: "www",
  type: "CNAME",
  content: "quent-tech.pages.dev",
  proxied: true,
  ttl: 1,
}, { provider: cfProvider });

// API subdomain (for Worker route)
const apiRecord = new cloudflare.Record("api-record", {
  zoneId: zone.id,
  name: "api",
  type: "A",
  content: "192.0.2.1", // dummy, Worker route handles traffic
  proxied: true,
  ttl: 1,
}, { provider: cfProvider });

// Google Workspace MX records
const mxRecords = [
  { priority: 1, value: "ASPMX.L.GOOGLE.COM" },
  { priority: 5, value: "ALT1.ASPMX.L.GOOGLE.COM" },
  { priority: 5, value: "ALT2.ASPMX.L.GOOGLE.COM" },
  { priority: 10, value: "ALT3.ASPMX.L.GOOGLE.COM" },
  { priority: 10, value: "ALT4.ASPMX.L.GOOGLE.COM" },
];

mxRecords.forEach((mx, i) => {
  new cloudflare.Record(`mx-record-${i}`, {
    zoneId: zone.id,
    name: "@",
    type: "MX",
    content: mx.value,
    priority: mx.priority,
    ttl: 3600,
  }, { provider: cfProvider });
});

// Google verification + SPF
const googleVerifyRecord = new cloudflare.Record("google-verification", {
  zoneId: zone.id,
  name: "@",
  type: "TXT",
  content: "google-site-verification=NNP4KQrrNxTR5x2QANG9YmQ59e5LSEuh6nbGmeQwK30",
  ttl: 300,
}, { provider: cfProvider });

const spfRecord = new cloudflare.Record("spf-record", {
  zoneId: zone.id,
  name: "@",
  type: "TXT",
  content: "v=spf1 include:_spf.google.com ~all",
  ttl: 300,
}, { provider: cfProvider });

// DMARC
const dmarcRecord = new cloudflare.Record("dmarc-record", {
  zoneId: zone.id,
  name: "_dmarc",
  type: "TXT",
  content: "v=DMARC1; p=quarantine; rua=mailto:info@quent-tech.com",
  ttl: 3600,
}, { provider: cfProvider });

// =============================================================================
// SES (kept on AWS for email sending)
// =============================================================================

const awsConfig = new pulumi.Config("aws");
const awsProfile = awsConfig.get("profile");

const sesIdentity = new aws.ses.DomainIdentity("ses-domain-identity", {
  domain: domainName,
});

const sesDkimTokens = new aws.ses.DomainDkim("ses-domain-dkim", {
  domain: sesIdentity.domain,
});

// SES verification TXT record in Cloudflare
const sesVerificationRecord = new cloudflare.Record("ses-verification", {
  zoneId: zone.id,
  name: `_amazonses.${domainName}`,
  type: "TXT",
  content: sesIdentity.verificationToken,
  ttl: 300,
}, { provider: cfProvider });

// SES DKIM CNAME records in Cloudflare
const dkimRecords = sesDkimTokens.dkimTokens.apply(tokens => {
  return tokens.map((token, index) => {
    return new cloudflare.Record(`ses-dkim-${index}`, {
      zoneId: zone.id,
      name: `${token}._domainkey.${domainName}`,
      type: "CNAME",
      content: `${token}.dkim.amazonses.com`,
      ttl: 300,
    }, { provider: cfProvider });
  });
});

// =============================================================================
// R2 Bucket for Analytics
// =============================================================================

const analyticsR2Bucket = new cloudflare.R2Bucket("analytics-r2-bucket", {
  accountId: cfAccountId,
  name: "quent-tech-analytics",
  location: "EEUR",
}, { provider: cfProvider });

// Enable R2 Data Catalog
const enableDataCatalog = new command.local.Command("enable-r2-data-catalog", {
  create: pulumi.all([cfApiToken]).apply(
    ([token]) =>
      `CLOUDFLARE_API_TOKEN="${token}" CLOUDFLARE_ACCOUNT_ID="${cfAccountId}" npx wrangler@latest r2 bucket catalog enable quent-tech-analytics 2>/dev/null || true`
  ),
}, { dependsOn: [analyticsR2Bucket] });

// =============================================================================
// Analytics Pipeline (Stream → Transform → Sink)
// =============================================================================

const createStream = new command.local.Command("analytics-pipeline-stream", {
  create: pulumi.all([cfApiToken]).apply(
    ([token]) => `
      export CLOUDFLARE_API_TOKEN="${token}"
      export CLOUDFLARE_ACCOUNT_ID="${cfAccountId}"
      if npx wrangler@latest pipelines streams list 2>&1 | grep -q "quent_tech_analytics_stream"; then
        echo "Stream already exists"
      else
        npx wrangler@latest pipelines streams create quent_tech_analytics_stream --http-enabled --no-http-auth 2>&1
      fi
    `
  ),
  delete: pulumi.all([cfApiToken]).apply(([token]) => `
    export CLOUDFLARE_API_TOKEN="${token}"
    export CLOUDFLARE_ACCOUNT_ID="${cfAccountId}"
    npx wrangler@latest pipelines streams delete quent_tech_analytics_stream 2>&1 || true
  `),
}, { dependsOn: [enableDataCatalog] });

const createSink = new command.local.Command("analytics-pipeline-sink", {
  create: pulumi.all([cfApiToken]).apply(
    ([token]) => `
      export CLOUDFLARE_API_TOKEN="${token}"
      export CLOUDFLARE_ACCOUNT_ID="${cfAccountId}"
      if npx wrangler@latest pipelines sinks list 2>&1 | grep -q "quent_tech_analytics_sink"; then
        echo "Sink already exists"
      else
        npx wrangler@latest pipelines sinks create quent_tech_analytics_sink \
          --type r2-data-catalog \
          --bucket quent-tech-analytics \
          --namespace quent_tech \
          --table website_events \
          --catalog-token "${token}" \
          --format parquet \
          --compression zstd \
          2>&1
      fi
    `
  ),
  delete: pulumi.all([cfApiToken]).apply(([token]) => `
    export CLOUDFLARE_API_TOKEN="${token}"
    export CLOUDFLARE_ACCOUNT_ID="${cfAccountId}"
    npx wrangler@latest pipelines sinks delete quent_tech_analytics_sink 2>&1 || true
  `),
}, { dependsOn: [enableDataCatalog] });

const sqlTransform = `
INSERT INTO quent_tech_analytics_sink
SELECT
  to_timestamp(json_get_str(value, 'timestamp')) as _event_received_at,
  json_get_str(value, 'date') as _event_received_on,
  json_get_str(value, 'event_type') as event_type,
  json_get_str(value, 'session_id') as session_id,
  json_get_str(value, 'path') as path,
  json_get_str(value, 'referrer') as referrer,
  json_get_str(value, 'title') as title,
  json_get_str(value, 'country') as country,
  json_get_str(value, 'city') as city,
  json_get_str(value, 'region') as region,
  json_get_str(value, 'user_agent') as user_agent,
  json_get_float(value, 'scroll_depth') as scroll_depth,
  json_get_float(value, 'time_on_page') as time_on_page,
  json_get_float(value, 'lcp') as lcp,
  json_get_float(value, 'cls') as cls,
  json_get_float(value, 'fid') as fid,
  json_get_float(value, 'inp') as inp,
  json_get_float(value, 'ttfb') as ttfb,
  json_get_str(value, 'utm_source') as utm_source,
  json_get_str(value, 'utm_medium') as utm_medium,
  json_get_str(value, 'utm_campaign') as utm_campaign,
  json_get_str(value, 'click_href') as click_href,
  json_get_str(value, 'click_text') as click_text,
  value as data
FROM quent_tech_analytics_stream
WHERE value IS NOT NULL
`;

const createPipeline = new command.local.Command("analytics-pipeline", {
  create: pulumi.all([cfApiToken]).apply(
    ([token]) => `
      export CLOUDFLARE_API_TOKEN="${token}"
      export CLOUDFLARE_ACCOUNT_ID="${cfAccountId}"
      if npx wrangler@latest pipelines list 2>&1 | grep -q "quent_tech_analytics_pipeline"; then
        echo "Pipeline already exists"
      else
        cat > /tmp/quent_tech_pipeline_transform.sql << 'EOSQL'
${sqlTransform}
EOSQL
        npx wrangler@latest pipelines create quent_tech_analytics_pipeline --sql-file /tmp/quent_tech_pipeline_transform.sql 2>&1
      fi
    `
  ),
  delete: pulumi.all([cfApiToken]).apply(([token]) => `
    export CLOUDFLARE_API_TOKEN="${token}"
    export CLOUDFLARE_ACCOUNT_ID="${cfAccountId}"
    npx wrangler@latest pipelines delete quent_tech_analytics_pipeline 2>&1 || true
  `),
}, { dependsOn: [createStream, createSink] });

// =============================================================================
// Exports
// =============================================================================

export const zoneId = zone.id;
export const nameServers = zone.nameServers;
export const pagesProjectName = pagesProject.name;
export const pagesUrl = pulumi.interpolate`https://quent-tech.pages.dev`;
export const contactWorkerUrl = pulumi.interpolate`https://${apiDomainName}/contact`;
export const analyticsWorkerUrl = "https://quent-tech-analytics.quent-tech.workers.dev";
export const analyticsStreamEndpoint = "https://85859721adbf4fceaac478f50f6129fd.ingest.cloudflare.com";

// SES exports (kept for reference)
export const sesDomain = sesIdentity.domain;
