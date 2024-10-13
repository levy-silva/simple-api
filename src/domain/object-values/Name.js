const notString = require("../../infra/utils/validators/notString.js");
const ValidationHandler = require("../../infra/utils/helpers/ValidationHandler.js");
const StringTypeRequirementMessage = require("../../infra/utils/messages/StringTypeRequirementMessage.js");
const lengthLessThan = require("../../infra/utils/validators/lengthLessThan.js");
const MinlengthRequirementMessage = require("../../infra/utils/messages/MinlengthRequirementMessage.js");
const lengthGraterThan = require("../../infra/utils/validators/lengthGreaterThan.js");
const MaxlengthRequirementMessage = require("../../infra/utils/messages/MaxlengthRequirementMessage.js");
const notAlpha = require("../../infra/utils/validators/notAlhpa.js");
const AlphabeticRequirementMessage = require("../../infra/utils/messages/AlphabeticRequirementMessage.js");

class Name {
    constructor(name) {
        this.name = name;
    }
    execute() {
        const name = this.name;
        const path = "name", min = 3, max = 20;
        if (notAlpha(name)) throw new ValidationHandler(new AlphabeticRequirementMessage(path));
        if (notString(name)) throw new ValidationHandler(new StringTypeRequirementMessage(path));
        if (lengthLessThan(name, min)) throw new ValidationHandler(new MinlengthRequirementMessage(path, min));
        if (lengthGraterThan(name, max)) throw new ValidationHandler(new MaxlengthRequirementMessage(path, max));
        return name;
    }
}

module.exports = Name;