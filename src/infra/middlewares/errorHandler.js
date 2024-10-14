const ValidationHandler = require("../utils/helpers/ValidationHandler.js");

function errorHandler(error, req, res, next) {
    if (error instanceof ValidationHandler) return error.report(res);
    else return res.status(500).json({ message: `Erro interno do servidor: ${error.message}`});
}

module.exports = errorHandler;