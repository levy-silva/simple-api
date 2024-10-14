const InverseTypeHandler = require("../helpers/InverserTypeHandler.js");

class InverseStringTypeError extends InverseTypeHandler {
    constructor(value) {
        super("string", value);
    }
}

module.exports = InverseStringTypeError;