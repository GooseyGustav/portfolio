#!/usr/bin/env bash
# Block direct internet access to Jarvi (3000) and content-factory (3002).
# nginx still reaches them over localhost. Run with: sudo bash deploy/close-app-ports.sh
set -euo pipefail

SSH_PORTS=$(sshd -T 2>/dev/null | awk '/^port /{print $2}')
SSH_PORTS=${SSH_PORTS:-22}

if ! command -v ufw >/dev/null; then apt-get install -y ufw; fi

if ! ufw status | grep -q "Status: active"; then
  # Keep SSH and the websites open before turning the firewall on
  for p in $SSH_PORTS; do ufw allow "$p/tcp"; done
  ufw allow 80/tcp
  ufw allow 443/tcp
fi
ufw deny 3000/tcp
ufw deny 3002/tcp
ufw --force enable
ufw status verbose
