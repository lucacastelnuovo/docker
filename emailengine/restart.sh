#!/bin/bash

# Stop container
cd /home/luca/emailengine/
docker-compose down

# Delete redis cache
sudo rm redis/dump.rdb

# Start container
docker-compose up -d

# Wait 20 seconds for container startup
sleep 10

# Inform user
echo "Emailengine restarted"
echo "https://email.castelnuovo.xyz"
echo \n
echo "1. Start free trial"
echo "2. Enable TLS & save settings"
echo "3. Create access token"

# Ask user questions and init script
echo \n
read -p "Access token: " accessToken
read -p "Email password: " emailPassword

# Create email account
curl -XPOST "https://email.castelnuovo.xyz/v1/account" \
    -H "Authorization: Bearer " + $accessToken \
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

# Create and update tokens
echo \n
echo "Create SMTP tokens for:"
echo "1. ldap.castelnuovo.xyz"
echo "2. authelia.castelnuovo.xyz"
