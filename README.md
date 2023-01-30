# api-get-some-help

The backend service that sits in front of the Spotify API. This service processes spotify data for `ui-get-some-help`.

## auth api

`http://hostname:port/auth/login`

TODO: description

`/auth/refresh_token`

TODO: description

`/auth/callback`

TODO: description

## spotify api

`/spotify/get_top_listens`

TODO: description

# Development

## Configuration

Run the following;

`npm i` to install dependencies.

`npm run setup` to configure the application.

This will walk you through the configuration steps for this service.

`npm run dev` to start the service.

## Usage

Go to `http://localhost:8080` in your browser.

You should see a login page, click login and the browser shoud redirect to a Spotify login page. Enter your creds and you will be redirected to the provided redirect url from the configuration step.

Fetching data from the UI

```javascript
fetch("https://api.spotify.com/v1/me", {
  headers: {
    Authorization: "Bearer $access_token",
  },
})
  .then((data) => data.json())
  .then((response) => console.log(response));
```
