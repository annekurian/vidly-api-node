const winston = require("winston");
const express = require("express");
const config = require("config");
const app = express();

require("./express/startup/logging")();
require("./express/startup/cors")(app);
require("./express/startup/routes")(app);
require("./express/startup/db")();
require("./express/startup/config")();
require("./express/startup/validation")();

const port = process.env.PORT || config.get("port");
const server = app.listen(port, () =>
  winston.info(`Listening on port ${port}...`)
);

module.exports = server;
