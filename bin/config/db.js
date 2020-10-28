const winston = require("winston");
const mongoose = require("mongoose");
const config = require("./global");

module.exports = function () {
    const mongoConnUrl = config.get("/mongo").url;
    mongoose
        .connect(mongoConnUrl)
        .then(() => winston.info("Connected to MongoDB..."));
};
