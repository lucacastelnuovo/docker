# Docker.ltc config

```
$ git clone https://github.com/Luca-Castelnuovo/docker.ltc ./
$ sudo chmod 600 ./traefik/acme.json
$ docker network create traefik-proxy
$ docker-compose -f traefik/docker-compose.yml up -d
$ docker-compose -f portainer/docker-compose.yml up -d
```
