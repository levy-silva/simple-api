class User {
    constructor({name, gender, email, phone, unemployed}) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.gender = gender;
    }
}

module.exports = User;