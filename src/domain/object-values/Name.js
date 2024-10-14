const notAlpha = require("../../infra/utils/validators/notAlhpa.js");
const notString = require("../../infra/utils/validators/notString.js");
const notRequired = require("../../infra/utils/validators/notRequired.js");
const MaxlengthError = require("../../infra/utils/messages/MaxlengthError.js");
const MinlengthError = require("../../infra/utils/messages/MinlengthError.js");
const lengthLessThan = require("../../infra/utils/validators/lengthLessThan.js");
const ValidationHandler = require("../../infra/utils/helpers/ValidationHandler.js");
const lengthGraterThan = require("../../infra/utils/validators/lengthGreaterThan.js");
const MissingPropertyError = require("../../infra/utils/messages/MissingPropertyError.js");
const InverseAlphabeticError = require("../../infra/utils/messages/InverseAlphabeticError.js");
const InverseStringTypeError = require("../../infra/utils/messages/InverseStringTypeError.js");

class Name {
    constructor(name) {
        this.name = name;
    }
    execute({ required = true }) {
        const name = this.name, boolean = required, path = "name", min = 3, max = 20;
        if (notAlpha(name)) throw new ValidationHandler(new InverseAlphabeticError(path));
        if (notString(name)) throw new ValidationHandler(new InverseStringTypeError(path));
        if (lengthLessThan(name, min)) throw new ValidationHandler(new MinlengthError(path, min));
        if (isRequired(name, boolean)) throw new ValidationHandler(new MissingPropertyError(path));
        if (lengthGraterThan(name, max)) throw new ValidationHandler(new MaxlengthError(path, max));
        if (notRequired(name, boolean)) return;
        else return name;
    }
}

module.exports = Name;