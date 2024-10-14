const isRequired = require("./isRequired.js");

function notRequired(value, boolean) {
    return !isRequired(value, boolean);
}

module.exports = notRequired;