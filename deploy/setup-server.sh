#!/usr/bin/env bash
# One-time setup for portfolio.asifthatworks.com. Run with: sudo bash deploy/setup-server.sh
set -euo pipefail
SRC="$(cd "$(dirname "$0")/.." && pwd)"

mkdir -p /var/www/portfolio
chown dev:dev /var/www/portfolio
cp "$SRC/deploy/nginx-portfolio.conf" /etc/nginx/sites-available/portfolio
ln -sf /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/portfolio
nginx -t
systemctl reload nginx
certbot --nginx -d portfolio.asifthatworks.com --redirect
echo "Done. Deploy updates as user dev with: bash deploy/deploy.sh"
