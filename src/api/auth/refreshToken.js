const request = require("request");

const createAuthOptions = (config, refresh_token) => {
  return {
    url: config.token_url,
    headers: {
      Authorization:
        "Basic " +
        new Buffer(config.client_id + ":" + config.client_secret).toString(
          "base64"
        ),
    },
    form: {
      grant_type: "refresh_token",
      refresh_token: refresh_token,
    },
    json: true,
  };
};

const init = (router, config = {}) => {
  router.get("/refresh_token", function (req, res) {
    console.log(config);
    // requesting access token from refresh token
    const refresh_token = req.query.refresh_token;
    const authOptions = createAuthOptions(config, refresh_token);

    request.post(authOptions, function (error, response, body) {
      if (!error && response.statusCode === 200) {
        var access_token = body.access_token;
        res.send({
          access_token: access_token,
        });
      }
    });
  });
};

module.exports = { init, name: "auth" };
