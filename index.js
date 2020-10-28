const winston = require("winston");
const express = require("express");
const compression = require("compression");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const config = require("./bin/config/global");

const app = express();

app.use(express.static("public"));
app.use(compression());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("dev"));

require("./bin/routes/index")(app);
require("./bin/config/db")();

const port = config.get("/port");
app.listen(port, () => winston.info(`Listening on port ${port}...`));
