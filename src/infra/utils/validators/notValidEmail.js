function notValidEmail(email) {
    const validation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    return !validation;
}

module.exports = notValidEmail;