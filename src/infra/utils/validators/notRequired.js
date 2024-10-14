const isUndefined = require("./isUndefined.js");

function notRequired(value, boolean) {
    return boolean === false && isUndefined(value);
}

module.exports = notRequired;