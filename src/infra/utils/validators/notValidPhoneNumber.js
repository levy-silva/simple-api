function notValidPhoneNumber(phone) {
    return !/^[1-9]{2}9[0-9]{8}$/.test(phone);
}

module.exports = notValidPhoneNumber;