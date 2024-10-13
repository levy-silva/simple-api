const isIn = require("./isIn.js");

function notIn(value, list) {
    return !isIn(value, list);
}

module.exports = notIn;