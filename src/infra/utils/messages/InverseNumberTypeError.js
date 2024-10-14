const InverseTypeHandler = require("../helpers/InverserTypeHandler.js");

class InverseNumberTypeError extends InverseTypeHandler {
    constructor(value) {
        super("number", value)
    }
}

module.exports = InverseNumberTypeError;