const ErrorMessager = require("./ErrorMessager.js");

class InverseTypeHandler extends ErrorMessager {
    constructor(type, value) {
        super(`${value} must be of type ${type}.`);
    }
}

module.exports = InverseTypeHandler;