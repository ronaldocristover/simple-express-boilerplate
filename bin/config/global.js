require("dotenv").config();
const confidence = require("confidence");

const config = {
    host: process.env.APP_URL || "http://localhost",
    port: process.env.APP_PORT || 9000,
    mongo: {
        url: process.env.MONGO_CONN_URL,
    },
};

const store = new confidence.Store(config);

exports.get = (key) => store.get(key);
