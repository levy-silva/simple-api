const express = require("express");
const router = require("./adapters/routes/router.js");
const errorHandler = require("./infra/middlewares/errorHandler.js");

require("./infra/database/models/index.js");

const app = express();
router(app);

app.use(errorHandler);

module.exports = app;