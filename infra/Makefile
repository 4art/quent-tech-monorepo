.PHONY: help preview deploy destroy refresh outputs stack-init build sync invalidate

# Configuration
WEBSITE_DIR := ../website
OUT_DIR := $(WEBSITE_DIR)/out
AWS_PROFILE := artem

help: ## Show this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

# Pulumi commands
preview: ## Preview infrastructure changes
	pulumi preview

deploy: ## Deploy infrastructure
	pulumi up --yes

destroy: ## Destroy all infrastructure (use with caution!)
	pulumi destroy

refresh: ## Refresh Pulumi state from cloud
	pulumi refresh --yes

outputs: ## Show Pulumi stack outputs
	pulumi stack output

stack-init: ## Initialize a new stack (usage: make stack-init STACK=prod)
	pulumi stack init $(STACK)

stack-select: ## Select a stack (usage: make stack-select STACK=dev)
	pulumi stack select $(STACK)

# Website commands
build: ## Build the website
	cd $(WEBSITE_DIR) && npm run build

sync: outputs ## Sync website to S3 bucket
	@BUCKET=$$(pulumi stack output bucketName) && \
	echo "Syncing to s3://$$BUCKET..." && \
	aws --profile $(AWS_PROFILE) s3 sync $(OUT_DIR) s3://$$BUCKET --delete

invalidate: outputs ## Invalidate CloudFront cache
	@DIST_ID=$$(pulumi stack output distributionId) && \
	echo "Invalidating CloudFront distribution $$DIST_ID..." && \
	aws --profile $(AWS_PROFILE) cloudfront create-invalidation --distribution-id $$DIST_ID --paths "/*"

# Combined commands
publish: build sync invalidate ## Build, sync, and invalidate (full deployment)
	@echo "Website published successfully!"

# DNS commands
show-nameservers: outputs ## Show Route 53 nameservers (update these in GoDaddy)
	@echo "Update these nameservers in GoDaddy:"
	@pulumi stack output hostedZoneNameServers

show-cloudfront: outputs ## Show CloudFront domain (for testing before DNS switch)
	@echo "CloudFront URL:"
	@pulumi stack output distributionDomainName

# Utility commands
logs: ## Show recent Pulumi logs
	pulumi logs --follow

cancel: ## Cancel any pending Pulumi operations
	pulumi cancel

export-state: ## Export Pulumi state to file
	pulumi stack export > pulumi-state-backup.json

import-state: ## Import Pulumi state from file
	pulumi stack import < pulumi-state-backup.json
