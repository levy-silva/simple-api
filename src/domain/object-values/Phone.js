const isRequired = require("../../infra/utils/validators/isRequired.js");
const notRequired = require("../../infra/utils/validators/notRequired.js");
const MinlengthError = require("../../infra/utils/messages/MinlengthError.js");
const MaxlengthError = require("../../infra/utils/messages/MaxlengthError.js");
const lengthLessThan = require("../../infra/utils/validators/lengthLessThan.js");
const ValidationHandler = require("../../infra/utils/helpers/ValidationHandler.js");
const lengthGraterThan = require("../../infra/utils/validators/lengthGreaterThan.js");
const notValidPhoneNumber = require("../../infra/utils/validators/notValidPhoneNumber.js");
const MissingPropertyError = require("../../infra/utils/messages/MissingPropertyError.js");
const InvalidPhoneNumberError = require("../../infra/utils/messages/InvalidPhoneNumberError.js");

class Phone {
    constructor(phone) {
        this.phone = phone;
    }

    execute({ required = true }) {
        const phone = this.phone, boolean = required, path = "phone", max = 11;
        if (lengthLessThan(max)) throw new ValidationHandler(new MinlengthError(path, max));
        if (lengthGraterThan(max)) throw new ValidationHandler(new MaxlengthError(path, max));
        if (isRequired(phone, boolean)) throw new ValidationHandler(new MissingPropertyError(path));
        if (notValidPhoneNumber(phone)) throw new ValidationHandler(new InvalidPhoneNumberError(phone));
        if (notRequired(phone, boolean)) return;
        else return phone;
    }
}

module.exports = Phone;