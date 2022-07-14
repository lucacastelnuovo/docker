#!/bin/bash

yell() { echo "$0: $*" >&2; }
die() { yell "$*"; exit 111; }
try() { "$@" || die "cannot $*"; }

set -o allexport
source .env set
+o allexport

# Ask user questions and init script
read -p "SUDO password: " sudoPassword
read -p "Email account password: " emailPassword

# Stop container
cd /home/luca/emailengine/
docker-compose down

# Delete redis cache
echo $sudoPassword | sudo -S -k rm redis/dump.rdb

# Restart container
docker-compose up -d

# Wait 20 seconds for container startup
sleep 10

# Create email account
curl -XPOST "https://email.castelnuovo.xyz/v1/account" \
    -H "Authorization: Bearer " + $EENGINE_PREPARED_TOKEN \
    -H "Content-type: application/json" \
    -d '{
      "account": "example",
      "name": "Luca Castelnuovo",
      "email": "luca@castelnuovo.xyz",
      "imap": {
        "disabled": true
      },
      "smtp": {
        "auth": {
          "user": "luca@castelnuovo.xyz",
          "pass": "' + $emailPassword + '"
        },
        "host": "smtp.mailbox.org",
        "port": 587,
        "secure": true
      }
    }'
