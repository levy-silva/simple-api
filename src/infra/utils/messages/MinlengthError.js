const ErrorMessager = require("../helpers/ErrorMessager.js");

class MinlengthError extends ErrorMessager {
    constructor(value, min) {
        super(`${value} must be at least ${min} characters long.`);
    }
}

module.exports = MinlengthError;