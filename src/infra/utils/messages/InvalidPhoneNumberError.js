const ErrorMessager = require("../helpers/ErrorMessager.js");

class InvalidPhoneNumberError extends ErrorMessager {
    constructor(phone) {
        super(`${phone} is not a valid phone number.`);
    }
}

module.exports = InvalidPhoneNumberError;