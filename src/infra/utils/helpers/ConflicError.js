const Responser = require("./Responser.js");

class ConflicError extends Responser {
    constructor({ message }) {
        super(message, 409);
    }
}

module.exports = ConflicError;