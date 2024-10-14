const notIn = require("../../infra/utils/validators/notIn.js");
const notString = require("../../infra/utils/validators/notString.js");
const isRequired = require("../../infra/utils/validators/isRequired.js");
const notRequired = require("../../infra/utils/validators/notRequired.js");
const ValidationHandler = require("../../infra/utils/helpers/ValidationHandler.js");
const InverseValueError = require("../../infra/utils/messages/InverseValueError.js");
const MissingPropertyError = require("../../infra/utils/messages/MissingPropertyError.js");
const InverseStringTypeError = require("../../infra/utils/messages/InverseStringTypeError.js");

class Gender {
    constructor(gender) {
        this.gender = gender;
    }

    execute({ required = true }) {
        const gender = this.gender, boolean = required, path = "gender", values = ["male", "female"];
        if (notRequired(gender, boolean)) return;
        if (notString(gender)) throw new ValidationHandler(new InverseStringTypeError(path));
        if (isRequired(gender, boolean)) throw new ValidationHandler(new MissingPropertyError(path));
        if (notIn(gender, values)) throw new ValidationHandler(new InverseValueError(gender, values));
        else return gender;
    }
}

module.exports = Gender;