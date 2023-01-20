const express = require('express');
const router = express.Router()

const {api} = require('./src')

const app = express();

// setup routes
api.init(app, router)

app.listen(8080, console.log(`app listening on 8080`))