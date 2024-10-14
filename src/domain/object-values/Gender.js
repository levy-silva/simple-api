const notIn = require("../../infra/utils/validators/notIn.js");
const notString = require("../../infra/utils/validators/notString.js");
const isUndefined = require("../../infra/utils/validators/isUndefined.js");
const ValidationHandler = require("../../infra/utils/helpers/ValidationHandler.js");
const ValueRequerimentMessage = require("../../infra/utils/messages/ValueRequerimentMessage.js");
const PropertyRequirementMessage = require("../../infra/utils/messages/PropertyRequirementMessage.js");
const StringTypeRequirementMessage = require("../../infra/utils/messages/StringTypeRequirementMessage.js");

class Gender {
    constructor(gender) {
        this.gender = gender;
    }

    execute({ required = true }) {
        const gender = this.gender, path = "gender", values = ["male", "female"];
        if (notIn(gender, values)) throw new ValidationHandler(new ValueRequerimentMessage(path));
        if (notString(gender)) throw new ValidationHandler(new StringTypeRequirementMessage(path));
        if (required && isUndefined(gender)) throw new ValidationHandler(new PropertyRequirementMessage(path));
        return gender;
    }
}

module.exports = Gender;