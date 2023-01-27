const express = require("express");
const router = express.Router();
const config = require("./config");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const { api } = require("./src");

const app = express();

app.use("/", router);

app
  .use(express.static(__dirname + "/public"))
  .use(cors())
  .use(cookieParser());

// setup routes
api.init(router, config);

app.listen(8080, console.log(`app listening on 8080`));
