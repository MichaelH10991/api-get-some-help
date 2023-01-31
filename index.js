const express = require("express");
const router = express.Router();
const config = require("./config");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const { api } = require("./src");

const startupOutput = `
app listening on 8080
goto: http://localhost:8080
`

var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

const app = express();

console.log(config)

app
// .use(express.static(__dirname + "/public"))
.use(cors(corsOptions))
.use(cookieParser());

// setup routes
api.init(router, config);

app.use("/", router);

app.listen(config.app.port, console.log(startupOutput));
