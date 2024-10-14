const database = require("../../infra/database/models/index.js");

class SequelizeRepository {
    constructor(modelName) {
        this.model = modelName;
    }

    async create(dto) {
        return database[this.model].create(dto);
    }

    async getAll(filter = {}) {
        return database[this.model].findAll(filter);
    }

    async getById(id) {
        return database[this.model].findByPk(id);
    }

    async getByEmail(email) {
        return database[this.model].findOne({ where: { email: email }});
    }

    async updateById(id, update) {
        const isUpdated = await database[this.model].update({ where: { id: id } });
        if (isUpdated[0] === 0) return false;
        return true;
    }

    async deleteById(id) {
        const isDeleted = await database[this.model].destroy({ where: { id: id } });
        if (isDeleted === 0) return false;
        return true;
    }
}

module.exports = SequelizeRepository;