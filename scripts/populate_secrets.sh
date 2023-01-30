#!/bin/bash

echo "
Go here for some creddy action: https://developer.spotify.com/dashboard/login

"

DEFAULT_REDIRECT_URI="http://localhost:3000"
DEFAULT_PORT="8080"


touch .dev.env

read -p "Enter client id: " client_id
read -p "Enter client secret: " client_secret
read -p "Enter redirect uri: (${DEFAULT_REDIRECT_URI}) " redirect_uri
read -p "Enter service port: (${DEFAULT_PORT}) " port

echo "
export CLIENT_ID=\"$client_id\"
export CLIENT_SECRET=\"$client_secret\"
export REDIRECT_URI=\"${redirect_url:-${DEFAULT_REDIRECT_URI}}\"
export PORT=\"${port:-${DEFAULT_PORT}}\"
" > .dev.env


