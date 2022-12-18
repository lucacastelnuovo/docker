# Docker.ltc files 🐋

<!-- Teleport -->

On postal:

```bash
nano /etc/teleport.yaml
postal start

# after it works
service teleport restart
```

<!-- LDAP -->

(&(objectclass=groupofnames)(member=%d))
https://docs.oracle.com/cd/E26217_01/E26214/html/ldap-filters-attrs-users.html

https://github.com/nitnelave/lldap/blob/main/example_configs/portainer.md

Also setup in minio to only allow s3.castelnuovo.dev group members

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

# LLDAP
cd lldap
cp .env.example .env && nano .env
docker compose up -d && cd ..

# Authelia
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

# Teleport
cd teleport
docker compose up -d && cd ..

# Status
cd status
docker compose up -d && cd ..

# Minio
cd minio
cp .env.example .env && nano .env
docker compose up -d && cd ..
# on mac execute: mc admin policy set s3 consoleAdmin user="uid=ltcastelnuovo,ou=people,dc=castelnuovo,dc=dev"

# Shlink
cd shlink
cp .env.example .env && nano .env
docker compose up -d && cd ..

# Plausible
cd plausible
cp .env.example .env && nano .env
docker compose up -d && cd ..

# Invoices
cd invoices
cp .env.example .env && nano .env
docker compose up -d && cd ..

# Watchtower
cd watchtower
cp .env.example .env && nano .env
docker compose up -d && cd ..
```
