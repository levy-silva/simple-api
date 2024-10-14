const isUndefined = require("../../infra/utils/validators/isUndefined");
const MinlengthError = require("../../infra/utils/messages/MinlengthError");
const MaxlengthError = require("../../infra/utils/messages/MaxlengthError");
const lengthLessThan = require("../../infra/utils/validators/lengthLessThan");
const ValidationHandler = require("../../infra/utils/helpers/ValidationHandler");
const lengthGraterThan = require("../../infra/utils/validators/lengthGreaterThan");
const notValidPhoneNumber = require("../../infra/utils/validators/notValidPhoneNumber");
const MissingPropertyError = require("../../infra/utils/messages/MissingPropertyError");
const InvalidPhoneNumberError = require("../../infra/utils/messages/InvalidPhoneNumberError");

class Phone {
    constructor(phone) {
        this.phone = phone;
    }

    execute({ required = true }) {
        const phone = this.phone, path = "phone", max = 11;
        if (lengthLessThan(max)) throw new ValidationHandler(new MinlengthError(path, max));
        if (lengthGraterThan(max)) throw new ValidationHandler(new MaxlengthError(path, max));
        if (notValidPhoneNumber(phone)) throw new ValidationHandler(new InvalidPhoneNumberError(phone));
        if (required && isUndefined(phone)) throw new ValidationHandler(new MissingPropertyError(path));
        else return phone;
    }
}

module.exports = Phone;