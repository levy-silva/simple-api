const ErrorMessager = require("../helpers/ErrorMessager.js");

class AlphabeticRequirementMessage extends ErrorMessager {
    constructor(value) {
        super(`${value} can only contain letters and spaces.`);
    }
}

module.exports = AlphabeticRequirementMessage;