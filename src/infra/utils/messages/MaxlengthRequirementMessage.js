const ErrorMessager = require("../helpers/ErrorMessager.js");

class MaxlengthRequirementMessage extends ErrorMessager {
    constructor(value, max) {
        super(`${value} must be no more than ${max} characters long.`);
    }
}

module.exports = MaxlengthRequirementMessage;