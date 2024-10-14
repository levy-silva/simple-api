const notIn = require("../../infra/utils/validators/notIn.js");
const notString = require("../../infra/utils/validators/notString.js");
const isUndefined = require("../../infra/utils/validators/isUndefined.js");
const ValidationHandler = require("../../infra/utils/helpers/ValidationHandler.js");
const InverseValueError = require("../../infra/utils/messages/InverseValueError.js");
const MissingPropertyError = require("../../infra/utils/messages/MissingPropertyError.js");
const InverseStringTypeError = require("../../infra/utils/messages/InverseStringTypeError.js");

class Gender {
    constructor(gender) {
        this.gender = gender;
    }

    execute({ required = true }) {
        const gender = this.gender, path = "gender", values = ["male", "female"];
        if (required === false && isUndefined(gender)) return;
        if (notString(gender)) throw new ValidationHandler(new InverseStringTypeError(path));
        if (notIn(gender, values)) throw new ValidationHandler(new InverseValueError(gender, values));
        if (required === true && isUndefined(gender)) throw new ValidationHandler(new MissingPropertyError(path));
        else return gender;
    }
}

module.exports = Gender;