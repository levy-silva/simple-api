const ErrorMessager = require("../helpers/ErrorMessager.js");

class ExistingEmailError extends ErrorMessager {
    constructor(email) {
        super(`The email address "${email}" is already in use. Please try logging in or use a different email address.`);
    }
}

module.exports = ExistingEmailError;