import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

const config = new pulumi.Config();
const domainName = "quent-tech.com";
const wwwDomainName = `www.${domainName}`;
const apiDomainName = `api.${domainName}`;
const notificationEmail = "info@quent-tech.com";

// Get AWS config
const awsConfig = new pulumi.Config("aws");
const awsProfile = awsConfig.get("profile");

// Create an AWS provider for us-east-1 (required for ACM certificates used with CloudFront)
const usEast1 = new aws.Provider("us-east-1", {
  region: "us-east-1",
  profile: awsProfile,
});

// =============================================================================
// Route 53 Hosted Zone
// =============================================================================

const hostedZone = new aws.route53.Zone("hosted-zone", {
  name: domainName,
});

// =============================================================================
// Google Workspace MX Records (for info@quent-tech.com)
// =============================================================================

const mxRecord = new aws.route53.Record("mx-record", {
  name: domainName,
  type: "MX",
  zoneId: hostedZone.zoneId,
  ttl: 3600,
  records: [
    "1 ASPMX.L.GOOGLE.COM",
    "5 ALT1.ASPMX.L.GOOGLE.COM",
    "5 ALT2.ASPMX.L.GOOGLE.COM",
    "10 ALT3.ASPMX.L.GOOGLE.COM",
    "10 ALT4.ASPMX.L.GOOGLE.COM",
  ],
});

// Google Workspace domain verification
const googleVerificationRecord = new aws.route53.Record("google-verification", {
  name: domainName,
  type: "TXT",
  zoneId: hostedZone.zoneId,
  ttl: 300,
  records: [
    "google-site-verification=NNP4KQrrNxTR5x2QANG9YmQ59e5LSEuh6nbGmeQwK30",
    "v=spf1 include:_spf.google.com ~all",
  ],
});

// DMARC record
const dmarcRecord = new aws.route53.Record("dmarc-record", {
  name: `_dmarc.${domainName}`,
  type: "TXT",
  zoneId: hostedZone.zoneId,
  ttl: 3600,
  records: ["v=DMARC1; p=quarantine; rua=mailto:info@quent-tech.com"],
});

// =============================================================================
// S3 Bucket for Website
// =============================================================================

const siteBucket = new aws.s3.Bucket("site-bucket", {
  bucket: domainName,
  website: {
    indexDocument: "index.html",
    errorDocument: "404.html",
  },
});

const bucketPublicAccessBlock = new aws.s3.BucketPublicAccessBlock("bucket-public-access-block", {
  bucket: siteBucket.id,
  blockPublicAcls: true,
  blockPublicPolicy: true,
  ignorePublicAcls: true,
  restrictPublicBuckets: true,
});

// =============================================================================
// ACM Certificate for CloudFront (must be in us-east-1)
// =============================================================================

const certificate = new aws.acm.Certificate("site-certificate", {
  domainName: domainName,
  subjectAlternativeNames: [wwwDomainName],
  validationMethod: "DNS",
}, { provider: usEast1 });

// DNS validation records for ACM certificate
const certValidationRecords = certificate.domainValidationOptions.apply(options => {
  const uniqueRecords = new Map<string, typeof options[0]>();
  options.forEach(option => {
    uniqueRecords.set(option.resourceRecordName, option);
  });
  return Array.from(uniqueRecords.values()).map((option, index) => {
    return new aws.route53.Record(`cert-validation-${index}`, {
      name: option.resourceRecordName,
      type: option.resourceRecordType,
      zoneId: hostedZone.zoneId,
      records: [option.resourceRecordValue],
      ttl: 300,
    });
  });
});

const certificateValidation = new aws.acm.CertificateValidation("cert-validation", {
  certificateArn: certificate.arn,
  validationRecordFqdns: certValidationRecords.apply(records => records.map(r => r.fqdn)),
}, { provider: usEast1 });

// =============================================================================
// CloudFront Distribution
// =============================================================================

const oac = new aws.cloudfront.OriginAccessControl("site-oac", {
  name: `${domainName}-oac`,
  description: "OAC for quent-tech.com",
  originAccessControlOriginType: "s3",
  signingBehavior: "always",
  signingProtocol: "sigv4",
});

const distribution = new aws.cloudfront.Distribution("site-distribution", {
  enabled: true,
  aliases: [domainName, wwwDomainName],
  defaultRootObject: "index.html",

  origins: [{
    domainName: siteBucket.bucketRegionalDomainName,
    originId: "S3Origin",
    originAccessControlId: oac.id,
  }],

  defaultCacheBehavior: {
    targetOriginId: "S3Origin",
    viewerProtocolPolicy: "redirect-to-https",
    allowedMethods: ["GET", "HEAD", "OPTIONS"],
    cachedMethods: ["GET", "HEAD"],
    compress: true,
    cachePolicyId: "658327ea-f89d-4fab-a63d-7e88639e58f6", // CachingOptimized
  },

  customErrorResponses: [
    {
      errorCode: 403,
      responseCode: 200,
      responsePagePath: "/index.html",
    },
    {
      errorCode: 404,
      responseCode: 404,
      responsePagePath: "/404.html",
    },
  ],

  restrictions: {
    geoRestriction: {
      restrictionType: "none",
    },
  },

  viewerCertificate: {
    acmCertificateArn: certificateValidation.certificateArn,
    sslSupportMethod: "sni-only",
    minimumProtocolVersion: "TLSv1.2_2021",
  },

  priceClass: "PriceClass_100",
});

const bucketPolicy = new aws.s3.BucketPolicy("bucket-policy", {
  bucket: siteBucket.id,
  policy: pulumi.all([siteBucket.arn, distribution.arn]).apply(([bucketArn, distributionArn]) =>
    JSON.stringify({
      Version: "2012-10-17",
      Statement: [{
        Sid: "AllowCloudFrontServicePrincipal",
        Effect: "Allow",
        Principal: { Service: "cloudfront.amazonaws.com" },
        Action: "s3:GetObject",
        Resource: `${bucketArn}/*`,
        Condition: { StringEquals: { "AWS:SourceArn": distributionArn } },
      }],
    })
  ),
});

// Route 53 records for website
const apexRecord = new aws.route53.Record("apex-record", {
  name: domainName,
  type: "A",
  zoneId: hostedZone.zoneId,
  aliases: [{
    name: distribution.domainName,
    zoneId: distribution.hostedZoneId,
    evaluateTargetHealth: false,
  }],
});

const wwwRecord = new aws.route53.Record("www-record", {
  name: wwwDomainName,
  type: "A",
  zoneId: hostedZone.zoneId,
  aliases: [{
    name: distribution.domainName,
    zoneId: distribution.hostedZoneId,
    evaluateTargetHealth: false,
  }],
});

// =============================================================================
// SES for Email Notifications
// =============================================================================

const sesIdentity = new aws.ses.DomainIdentity("ses-domain-identity", {
  domain: domainName,
});

const sesDkimTokens = new aws.ses.DomainDkim("ses-domain-dkim", {
  domain: sesIdentity.domain,
});

// DKIM records for SES
const dkimRecords = sesDkimTokens.dkimTokens.apply(tokens => {
  return tokens.map((token, index) => {
    return new aws.route53.Record(`ses-dkim-${index}`, {
      name: `${token}._domainkey.${domainName}`,
      type: "CNAME",
      zoneId: hostedZone.zoneId,
      records: [`${token}.dkim.amazonses.com`],
      ttl: 300,
    });
  });
});

// SES verification record
const sesVerificationRecord = new aws.route53.Record("ses-verification", {
  name: `_amazonses.${domainName}`,
  type: "TXT",
  zoneId: hostedZone.zoneId,
  records: [sesIdentity.verificationToken],
  ttl: 300,
});

// =============================================================================
// Lambda for Contact Form
// =============================================================================

// IAM role for Lambda
const lambdaRole = new aws.iam.Role("contact-lambda-role", {
  assumeRolePolicy: JSON.stringify({
    Version: "2012-10-17",
    Statement: [{
      Action: "sts:AssumeRole",
      Effect: "Allow",
      Principal: { Service: "lambda.amazonaws.com" },
    }],
  }),
});

const lambdaBasicPolicy = new aws.iam.RolePolicyAttachment("lambda-basic-policy", {
  role: lambdaRole.name,
  policyArn: "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole",
});

const lambdaSesPolicy = new aws.iam.RolePolicy("lambda-ses-policy", {
  role: lambdaRole.id,
  policy: JSON.stringify({
    Version: "2012-10-17",
    Statement: [{
      Effect: "Allow",
      Action: ["ses:SendEmail", "ses:SendRawEmail"],
      Resource: "*",
    }],
  }),
});

// Lambda function code
const contactLambdaCode = `
const { SESClient, SendEmailCommand } = require("@aws-sdk/client-ses");

const ses = new SESClient({ region: process.env.AWS_REGION });
const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL;

exports.handler = async (event) => {
  const headers = {
    "Access-Control-Allow-Origin": "https://quent-tech.com",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Content-Type": "application/json",
  };

  // Handle preflight
  if (event.requestContext?.http?.method === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  try {
    const body = JSON.parse(event.body || "{}");
    const { name, email, company, message, honeypot } = body;

    // Spam check - honeypot field should be empty
    if (honeypot) {
      return { statusCode: 200, headers, body: JSON.stringify({ success: true }) };
    }

    // Validation
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Name, email, and message are required" }),
      };
    }

    // Email validation
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Invalid email address" }),
      };
    }

    // Send email notification
    const command = new SendEmailCommand({
      Source: NOTIFICATION_EMAIL,
      Destination: { ToAddresses: [NOTIFICATION_EMAIL] },
      Message: {
        Subject: { Data: \`[Quent Tech] New Contact Form: \${name}\` },
        Body: {
          Text: {
            Data: \`New contact form submission:

Name: \${name}
Email: \${email}
Company: \${company || "Not provided"}

Message:
\${message}

---
Sent from quent-tech.com contact form\`,
          },
        },
      },
      ReplyToAddresses: [email],
    });

    await ses.send(command);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Failed to send message" }),
    };
  }
};
`;

const contactLambda = new aws.lambda.Function("contact-lambda", {
  runtime: "nodejs20.x",
  handler: "index.handler",
  role: lambdaRole.arn,
  code: new pulumi.asset.AssetArchive({
    "index.js": new pulumi.asset.StringAsset(contactLambdaCode),
  }),
  environment: {
    variables: {
      NOTIFICATION_EMAIL: notificationEmail,
    },
  },
  timeout: 10,
});

// =============================================================================
// API Gateway (HTTP API)
// =============================================================================

const api = new aws.apigatewayv2.Api("contact-api", {
  name: "quent-tech-contact-api",
  protocolType: "HTTP",
  corsConfiguration: {
    allowOrigins: [`https://${domainName}`, `https://${wwwDomainName}`],
    allowMethods: ["POST", "OPTIONS"],
    allowHeaders: ["Content-Type"],
    maxAge: 86400,
  },
});

const lambdaPermission = new aws.lambda.Permission("api-lambda-permission", {
  action: "lambda:InvokeFunction",
  function: contactLambda.name,
  principal: "apigateway.amazonaws.com",
  sourceArn: pulumi.interpolate`${api.executionArn}/*/*`,
});

const integration = new aws.apigatewayv2.Integration("contact-integration", {
  apiId: api.id,
  integrationType: "AWS_PROXY",
  integrationUri: contactLambda.arn,
  payloadFormatVersion: "2.0",
});

const route = new aws.apigatewayv2.Route("contact-route", {
  apiId: api.id,
  routeKey: "POST /contact",
  target: pulumi.interpolate`integrations/${integration.id}`,
});

const stage = new aws.apigatewayv2.Stage("api-stage", {
  apiId: api.id,
  name: "$default",
  autoDeploy: true,
});

// Regional ACM certificate for API Gateway (must be in same region as API Gateway)
const apiCertificate = new aws.acm.Certificate("api-certificate", {
  domainName: apiDomainName,
  validationMethod: "DNS",
});

// API certificate validation record
const apiCertValidationRecord = new aws.route53.Record("api-cert-validation", {
  name: apiCertificate.domainValidationOptions[0].resourceRecordName,
  type: apiCertificate.domainValidationOptions[0].resourceRecordType,
  zoneId: hostedZone.zoneId,
  records: [apiCertificate.domainValidationOptions[0].resourceRecordValue],
  ttl: 300,
});

const apiCertificateValidation = new aws.acm.CertificateValidation("api-cert-validation", {
  certificateArn: apiCertificate.arn,
  validationRecordFqdns: [apiCertValidationRecord.fqdn],
});

// Custom domain for API
const apiDomainCert = new aws.apigatewayv2.DomainName("api-domain", {
  domainName: apiDomainName,
  domainNameConfiguration: {
    certificateArn: apiCertificateValidation.certificateArn,
    endpointType: "REGIONAL",
    securityPolicy: "TLS_1_2",
  },
});

const apiMapping = new aws.apigatewayv2.ApiMapping("api-mapping", {
  apiId: api.id,
  domainName: apiDomainCert.id,
  stage: stage.id,
});

// Route 53 record for API
const apiRecord = new aws.route53.Record("api-record", {
  name: apiDomainName,
  type: "A",
  zoneId: hostedZone.zoneId,
  aliases: [{
    name: apiDomainCert.domainNameConfiguration.apply(c => c.targetDomainName),
    zoneId: apiDomainCert.domainNameConfiguration.apply(c => c.hostedZoneId),
    evaluateTargetHealth: false,
  }],
});

// =============================================================================
// Exports
// =============================================================================

export const bucketName = siteBucket.bucket;
export const bucketArn = siteBucket.arn;
export const distributionId = distribution.id;
export const distributionDomainName = distribution.domainName;
export const hostedZoneId = hostedZone.zoneId;
export const hostedZoneNameServers = hostedZone.nameServers;
export const certificateArn = certificate.arn;
export const apiUrl = pulumi.interpolate`https://${apiDomainName}/contact`;
export const apiGatewayUrl = api.apiEndpoint;
