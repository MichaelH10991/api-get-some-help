const config = {
  api: {
    // auth endpoints config
    auth: {
      client_id: process.env.CLIENT_ID || "client id",
      client_secret: process.env.CLIENT_SECRET || "client secret",
      redirect_uri: process.env.REDIRECT_URI || "http://localhost:8080/callback",
      token_url:
        process.env.TOKEN_URL || "https://accounts.spotify.com/api/token",
      auth_url:
        process.env.AUTH_UTL || "https://accounts.spotify.com/authorize?",
      spotify_auth_state:
        process.env.SPOTIFY_AUTH_STATE || "spotify_auth_state",
      random_length: process.env.RANDOM_LENGTH || 16,
      scope: process.env.SCOPE || "user-read-private user-read-email",
    },
    //spotify endpoints config
    spotify: {},
  },
  app: {
    port: process.env.PORT || "8080"

  }
};

module.exports = config;
