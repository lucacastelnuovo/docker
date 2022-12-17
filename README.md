# Docker.ltc files 🐋

### Server installation

```bash
apt update -y
apt upgrade -y

curl -fsSL https://get.docker.com -o get-docker.sh
./get-docker.sh

git clone https://github.com/Luca-Castelnuovo/docker.ltc

cd docker.ltc && mv * .. && mv .* ..
cd .. && rmdir docker.ltc
```

### Docker installation

```bash
docker network create hp1-network

# MariaDB
cd mariadb
cp .env.example .env && nano .env
docker compose up -d && cd ..

# LLDAP - TODO: mail_password
cd lldap
cp .env.example .env && nano .env
docker compose up -d && cd ..

# Authelia - TODO: mail_password
cd authelia
cp .env.example .env && nano .env
docker compose up -d && cd ..

# Traefik
cd traefik
cp .env.example .env && nano .env
touch config/acme.json && chmod 600 config/acme.json
docker compose up -d && cd ..

# Portainer
cd portainer
docker compose up -d && cd ..

# Minio
cd minio
cp .env.example .env && nano .env
docker compose up -d && cd ..
# on mac execute: mc admin policy set s3 consoleAdmin user="uid=ltcastelnuovo,ou=people,dc=castelnuovo,dc=dev"

# Teleport - TODO: all
cd teleport
docker compose up -d && cd ..

# Plausible - TODO: all
# TODO: setup directory

# Shlink - TODO: geolite_key
cd shlink
cp .env.example .env && nano .env
docker compose up -d && cd ..

# Invoices - TODO: mail_password
cd invoices
cp .env.example .env && nano .env
docker compose up -d && cd ..

# Status
cd status
docker compose up -d && cd ..

# Watchtower - TODO: mail_password
cd watchtower
cp .env.example .env && nano .env
docker compose up -d && cd ..
```
