# Docker.ltc config

```
$ git clone https://github.com/Luca-Castelnuovo/docker.ltc ./
$ sudo chmod 600 ./core/traefik/acme.json
$ docker network create traefik-proxy
$ docker-compose -f core/docker-compose.yml up -d
```
