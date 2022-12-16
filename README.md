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

# Traefik
cd traefik
chmod 600 acme.json
cp .env.example .env
nano .env
docker-compose up -d
cd ..

# Portainer
docker-compose -f portainer/docker-compose.yml up -d
```
