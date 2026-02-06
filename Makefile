.PHONY: help deploy infra infra-preview destroy refresh outputs build sync invalidate install

# Directories
INFRA_DIR := infra
WEBSITE_DIR := website

help: ## Show this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

# Main commands
deploy: build sync invalidate ## Build, sync to S3, and invalidate CloudFront
	@echo "Website deployed successfully!"

build: ## Build the website
	cd $(WEBSITE_DIR) && npm run build

sync: ## Sync website to S3 bucket
	cd $(INFRA_DIR) && make sync

invalidate: ## Invalidate CloudFront cache
	cd $(INFRA_DIR) && make invalidate

# Infrastructure commands
infra: ## Deploy infrastructure changes (Pulumi)
	cd $(INFRA_DIR) && pulumi up --yes

infra-preview: ## Preview infrastructure changes
	cd $(INFRA_DIR) && pulumi preview

destroy: ## Destroy all infrastructure (use with caution!)
	cd $(INFRA_DIR) && pulumi destroy

refresh: ## Refresh Pulumi state from cloud
	cd $(INFRA_DIR) && pulumi refresh --yes

outputs: ## Show Pulumi stack outputs
	cd $(INFRA_DIR) && pulumi stack output

# Setup commands
install: ## Install dependencies for both infra and website
	cd $(INFRA_DIR) && npm install
	cd $(WEBSITE_DIR) && npm install

# Utility commands
show-nameservers: ## Show Route 53 nameservers
	cd $(INFRA_DIR) && make show-nameservers

show-cloudfront: ## Show CloudFront domain
	cd $(INFRA_DIR) && make show-cloudfront
