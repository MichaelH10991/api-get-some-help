#!/bin/bash

echo "

Go here to get creds: https://developer.spotify.com/dashboard/login

"

DEFAULT_CALLBACK_URL="http://localhost:8080/callback"
DEFAULT_PORT="8080"


touch .dev.env

read -p "Enter cleint id: " client_id
read -p "Enter client secret: " client_secret
read -p "Enter callback url: (${DEFAULT_CALLBACK_URL}) " callback_url
read -p "Enter service port: (${DEFAULT_PORT}) " port

echo "
export CLIENT_ID=\"$client_id\"
export CLIENT_SECRET=\"$client_secret\"
export CALLBACK_URL=\"${callback_url:-${DEFAULT_CALLBACK_URL}}\"
export PORT=\"${port:-${DEFAULT_PORT}}\"
" > .dev.env


