const isUndefined = require("./isUndefined.js");

function isRequired(value, boolean) {
    return boolean === true && isUndefined(value);
}

module.exports = isRequired;