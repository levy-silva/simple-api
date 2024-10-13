const ErrorMessager = require("../helpers/ErrorMessager.js");

class PropertyRequirementMessage extends ErrorMessager {
    constructor(property) {
        super(`${property} is required and must be provided.`);
    }
}

module.exports = PropertyRequirementMessage;