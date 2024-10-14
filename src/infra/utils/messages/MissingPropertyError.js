const ErrorMessager = require("../helpers/ErrorMessager.js");

class MissingPropertyError extends ErrorMessager {
    constructor(property) {
        super(`${property} is required and must be provided.`);
    }
}

module.exports = MissingPropertyError;