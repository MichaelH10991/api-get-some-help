const getTopListens = require("./getTopListens");

module.exports = {
  name: "spotify",
  init: (router) => {
    getTopListens.init(router);
  },
};
