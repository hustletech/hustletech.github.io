# ┌───────────────────────────────────────────┐
# │  HustleTech GitHub Pages - DevContainer   │
# │                                           │
# │  For development use ONLY.                │
# │  Do not deploy it on production!          │
# │  Or I will personally find you,           │
# │  and trust me, you won't like it.         │
# │                                           │
# │  *You've been warned, apprentice.*        │
# └───────────────────────────────────────────┘

# Start with Ubuntu official image (standard for devcontainer)
FROM ubuntu:22.04

# Who's the boss?
LABEL maintainer="Rodrigo Dantas"
LABEL email="rodrigo.dantas@hustletech.dev"
LABEL project="hustletech.github.io"
LABEL environment="development"
LABEL version="1.0.0"

# Set noninteractive installation (because we don't have time for questions)
ENV DEBIAN_FRONTEND=noninteractive

# Install Node.js 20 LTS, npm, git and essential development tools (as root)
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    # Core development tools
    curl git vim ca-certificates build-essential \
    openssh-client gnupg lsof procps unzip \
    # Additional utilities for development
    jq tree htop nano sudo wget \
    && curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Install global npm packages for React development (only dev essentials)
RUN npm install -g --unsafe-perm \
    npm@latest

# Create the non-root user (after installing everything)
RUN useradd --uid 1001 --create-home --shell /bin/bash developer && \
    usermod -aG sudo developer && \
    echo "developer ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers

# Switch to non-root user
USER developer

# Set working directory (the base of operations)
WORKDIR /workspace

# Configure development environment
ENV NODE_ENV=development

# Dev containers should not auto-run the app
CMD ["tail", "-f", "/dev/null"]
