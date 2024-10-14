const ErrorMessager = require("../helpers/ErrorMessager.js");

class InvalidEmailError extends ErrorMessager {
    constructor(email) {
        super(`${email} is not a valid email.`);
    }
}

module.exports = InvalidEmailError;