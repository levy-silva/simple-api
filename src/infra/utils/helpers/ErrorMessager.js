class ErrorMessager extends Error {
    constructor(message) {
        this.message = message;
    }
}

module.exports = ErrorMessager;