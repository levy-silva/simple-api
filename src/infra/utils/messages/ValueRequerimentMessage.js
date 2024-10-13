const ErrorMessager = require("../helpers/ErrorMessager");

class ValueRequerimentMessage extends ErrorMessager {
    constructor(value, [...values]) {
        const allowedValues = values.map((val, index) => {
            if (index === (values.length - 1)) return val;
            if (index === (values.length - 2)) return `${val} or `;
            return `${val}, `;
        }).join("");
        super(`${value} is not valid. Only ${allowedValues} is allowed.`)
    }
}

module.exports = ValueRequerimentMessage;