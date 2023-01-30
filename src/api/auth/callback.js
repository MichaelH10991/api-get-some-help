const request = require("request");
const querystring = require("querystring");

const createAuthOptions = (config, code) => {
  return {
    url: config.token_url,
    form: {
      code: code,
      redirect_uri: config.redirect_uri,
      grant_type: "authorization_code",
    },
    headers: {
      Authorization:
        "Basic " +
        new Buffer(config.client_id + ":" + config.client_secret).toString(
          "base64"
        ),
    },
    json: true,
  };
};

const init = (router, config = {}) => {
  router.get("/callback", function (req, res) {
    // your application requests refresh and access tokens
    // after checking the state parameter

    console.log(req.query);

    var code = req.query.code || null;
    var state = req.query.state || null;
    var storedState = req.cookies
      ? req.cookies[config.spotify_auth_state]
      : null;

    if (state === null || state !== storedState) {
      res.redirect(
        "/#" +
          querystring.stringify({
            error: "state_mismatch",
          })
      );
    } else {
      res.clearCookie(config.spotify_auth_state);
      const authOptions = createAuthOptions(config, code);
      request.post(authOptions, function (error, response, body) {
        if (!error && response.statusCode === 200) {
          // can get access_token and refresh_token from window
          var access_token = body.access_token,
            refresh_token = body.refresh_token;

          var options = {
            url: "https://api.spotify.com/v1/me",
            headers: { Authorization: "Bearer " + access_token },
            json: true,
          };

          // use the access token to access the Spotify Web API
          request.get(options, function (error, response, body) {
            console.log(body);
          });

          // we can also pass the token to the browser to make requests from there
          res.redirect(
            `${config.redirect_uri}/#` +
              querystring.stringify({
                access_token: access_token,
                refresh_token: refresh_token,
              })
          );
        } else {
          res.redirect(
            "/#" +
              querystring.stringify({
                error: "invalid_token",
              })
          );
        }
      });
    }
  });
};

module.exports = { init, name: "auth" };
