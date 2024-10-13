const InverseTypeHandler = require("../helpers/InverserTypeHandler.js");

class NumberTypeRequirementMessage extends InverseTypeHandler {
    constructor(value) {
        super("number", value)
    }
}

module.exports = NumberTypeRequirementMessage;