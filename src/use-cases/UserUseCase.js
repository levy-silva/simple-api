const User = require("../domain/entities/User.js");

class UserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async createUser(dto) {
        const user = new User(dto);
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