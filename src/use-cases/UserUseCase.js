const User = require("../domain/entities/User.js");
const ConflicError = require("../infra/utils/helpers/ConflicError.js");
const ExistingEmailError = require("../infra/utils/messages/ExistingEmailError.js");

class UserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async createUser(dto) {
        const user = new User(dto);
        const existingUser = await this.userRepository.getByEmail(user.email);
        if (existingUser) throw new ConflicError(new ExistingEmailError(user.email));
        return this.userRepository.create(user);
    }

    async getAll() {
        return this.userRepository.getAll();
    }

    async getById(id) {
        return this.userRepository.getById(id);
    }
    
    async getByEmail(email) {
        return this.userRepository.getByEmail(email);
    }

    async updateById(id, update) {
        const updateUser = new User(update, { required: false });
        return this.userRepository.updateById(id, updateUser);
    }
}

module.exports = UserUseCase;