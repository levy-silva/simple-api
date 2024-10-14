const ErrorMessager = require("../helpers/ErrorMessager.js");

class InverseAlphabeticError extends ErrorMessager {
    constructor(value) {
        super(`${value} can only contain letters and spaces.`);
    }
}

module.exports = InverseAlphabeticError;