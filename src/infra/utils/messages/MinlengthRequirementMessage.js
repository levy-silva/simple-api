const ErrorMessager = require("../helpers/ErrorMessager.js");

class MinlengthRequirementMessage extends ErrorMessager {
    constructor(value, min) {
        super(`${value} must be at least ${min} characters long.`);
    }
}

module.exports = MinlengthRequirementMessage;