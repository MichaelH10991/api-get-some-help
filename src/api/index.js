const fs = require("fs");
const path = require("path");
const express = require("express");

const mountEndpoints = (router, config, absolutePath = __dirname) => {
  const dir = fs
    .readdirSync(absolutePath)
    .filter((file) => file !== "index.js");

  dir.forEach((file) => {
    const filePath = path.join(absolutePath, file);
    if (fs.statSync(filePath).isDirectory()) {
      const subRouter = express.Router();
      mountEndpoints(subRouter, config, filePath);
      router.use(`/${file}`, subRouter);
    }
    const modulePath = `./${path.join(
      path.relative(__dirname, absolutePath),
      file
    )}`;
    const route = require(modulePath);
    if (route.init) {
      route.init(router, config.api[route.name]);
    }
  });
};

module.exports = {
  init: (router, config) => {
    mountEndpoints(router, config);
  },
};
