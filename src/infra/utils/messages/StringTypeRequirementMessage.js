const InverseTypeHandler = require("../helpers/InverserTypeHandler.js");

class StringTypeRequirementMessage extends InverseTypeHandler {
    constructor(value) {
        super("string", value);
    }
}

module.exports = StringTypeRequirementMessage;