const notAlpha = require("../../infra/utils/validators/notAlhpa.js");
const notString = require("../../infra/utils/validators/notString.js");
const isUndefined = require("../../infra/utils/validators/isUndefined.js");
const lengthLessThan = require("../../infra/utils/validators/lengthLessThan.js");
const ValidationHandler = require("../../infra/utils/helpers/ValidationHandler.js");
const lengthGraterThan = require("../../infra/utils/validators/lengthGreaterThan.js");
const PropertyRequirementMessage = require("../../infra/utils/messages/PropertyRequirementMessage.js");
const MaxlengthRequirementMessage = require("../../infra/utils/messages/MaxlengthRequirementMessage.js");
const MinlengthRequirementMessage = require("../../infra/utils/messages/MinlengthRequirementMessage.js");
const AlphabeticRequirementMessage = require("../../infra/utils/messages/AlphabeticRequirementMessage.js");
const StringTypeRequirementMessage = require("../../infra/utils/messages/StringTypeRequirementMessage.js");

class Name {
    constructor(name) {
        this.name = name;
    }
    execute({ required = true }) {
        const name = this.name, path = "name", min = 3, max = 20;
        if (notAlpha(name)) throw new ValidationHandler(new AlphabeticRequirementMessage(path));
        if (notString(name)) throw new ValidationHandler(new StringTypeRequirementMessage(path));
        if (required && isUndefined(name)) throw new ValidationHandler(new PropertyRequirementMessage(path));
        if (lengthLessThan(name, min)) throw new ValidationHandler(new MinlengthRequirementMessage(path, min));
        if (lengthGraterThan(name, max)) throw new ValidationHandler(new MaxlengthRequirementMessage(path, max));
        return name;
    }
}

module.exports = Name;