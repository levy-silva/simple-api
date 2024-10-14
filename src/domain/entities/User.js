const Name = require("../object-values/Name.js");
const Phone = require("../object-values/Phone.js");
const Gender = require("../object-values/Gender.js");

class User {
    constructor({name, gender, email, phone,}, options = { required: true }) {
        this.name = new Name(name).execute(options);
        this.phone = new Phone(phone).execute(options);
        this.email = new Gender(gender).execute(options);
        this.gender = new Gender(gender).execute(options);
    }
}

module.exports = User;