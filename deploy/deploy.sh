#!/usr/bin/env bash
# Build the site and publish it. Run as user dev, no sudo needed after setup-server.sh.
set -euo pipefail
cd "$(dirname "$0")/.."
git pull --ff-only || true
npm ci
npm run build
find /var/www/portfolio -mindepth 1 -delete
cp -r dist/. /var/www/portfolio/
echo "Published to https://portfolio.asifthatworks.com"
