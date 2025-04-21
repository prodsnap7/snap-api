#!/usr/bin/env bash
# exit on error
set -o errexit

# Install dependencies
yarn install

# Build the project (if needed, based on your package.json build script)
yarn build

# Ensure the Puppeteer cache directory exists within the project build path
# Adjust the path if your build output directory is different from 'dist' or root
# Common Render path: /opt/render/.cache/puppeteer
# We map it to a project path that gets cached: ./.puppeteer-cache
PUPPETEER_CACHE_DIR=$(pwd)/.puppeteer-cache
mkdir -p $PUPPETEER_CACHE_DIR
export PUPPETEER_CACHE_DIR

# Install Puppeteer browsers
# Using 'npx puppeteer browsers install chrome' is often more reliable than the old 'npx puppeteer install'
npx puppeteer browsers install chrome

echo "Puppeteer Chromium installed to $PUPPETEER_CACHE_DIR" 