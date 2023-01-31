var querystring = require("querystring");

/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
const generateRandomString = function (length) {
  const POSSIBLE =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let text = "";

  for (var i = 0; i < length; i++) {
    text += POSSIBLE.charAt(Math.floor(Math.random() * POSSIBLE.length));
  }
  return text;
};

const init = (router, config) => {
  router.get("/login", function (req, res) {
    var state = generateRandomString(config.random_length);
    res.cookie(config.spotify_auth_state, state);
    res.redirect(
      config.auth_url +
        querystring.stringify({
          response_type: "code",
          client_id: config.client_id,
          scope: config.scope,
          redirect_uri: config.redirect_uri,
          state: state,
        })
    );
  });
};

module.exports = { init, name: "auth" };
