const winston = require("winston");
const express = require("express");
const compression = require("compression");
var bodyParser = require("body-parser");

const config = require("./bin/config/global");

const app = express();

app.use(express.static("public"));
app.use(compression());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require("./bin/routes/index")(app);
require("./bin/config/db")();

const port = config.get("/port");
app.listen(port, () => winston.info(`Listening on port ${port}...`));
