const Responser = require("./Responser.js");

class ValidationHandler extends Responser {
    constructor({ message }) {
        super(message || "A validation error occurred.", 400);
    }
}

module.exports = ValidationHandler;