function isAlpha(value) {
    return /^[a-zA-ZÀ-ÿ\s]+$/.test(value);
}

module.exports = isAlpha;