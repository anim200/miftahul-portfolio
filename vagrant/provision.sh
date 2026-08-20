#!/usr/bin/env bash

set -euo pipefail

export DEBIAN_FRONTEND=noninteractive

echo "Updating Ubuntu packages..."
apt-get update

echo "Installing Java and required tools..."
apt-get install -y \
  ca-certificates \
  curl \
  fontconfig \
  git \
  gnupg \
  wget \
  openjdk-21-jre

echo "Adding Docker repository..."
install -m 0755 -d /etc/apt/keyrings

curl -fsSL https://download.docker.com/linux/ubuntu/gpg \
  -o /etc/apt/keyrings/docker.asc

chmod a+r /etc/apt/keyrings/docker.asc

echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu $(. /etc/os-release && echo "$VERSION_CODENAME") stable" \
  > /etc/apt/sources.list.d/docker.list

echo "Adding Jenkins repository..."
wget -q -O /etc/apt/keyrings/jenkins-keyring.asc \
  https://pkg.jenkins.io/debian-stable/jenkins.io-2026.key

echo \
  "deb [signed-by=/etc/apt/keyrings/jenkins-keyring.asc] https://pkg.jenkins.io/debian-stable binary/" \
  > /etc/apt/sources.list.d/jenkins.list

echo "Installing Docker and Jenkins..."
apt-get update

apt-get install -y \
  docker-ce \
  docker-ce-cli \
  containerd.io \
  docker-buildx-plugin \
  docker-compose-plugin \
  jenkins

echo "Giving Docker permission to Jenkins and Vagrant users..."
usermod -aG docker jenkins
usermod -aG docker vagrant

echo "Changing Jenkins port to 8081..."
mkdir -p /etc/systemd/system/jenkins.service.d

cat > /etc/systemd/system/jenkins.service.d/override.conf <<'EOF'
[Service]
Environment="JENKINS_PORT=8081"
EOF

echo "Starting services..."
systemctl daemon-reload
systemctl enable --now docker
systemctl enable --now jenkins
systemctl restart jenkins

echo "Docker and Jenkins installation completed."