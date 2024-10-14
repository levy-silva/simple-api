class Controller {
    constructor(entityUseCase) {
        this.useCase = entityUseCase;
    }

    async getAll(req, res, next) {
        try {
            const recordList = await this.useCase.getAll();
            return res.status(200).json(recordList);
        } catch (error) {
            next(error);
        }
    }

    async getById(req, res, next) {
        try {
            const id = req.params.id;
            const record = await this.useCase.getById(Number(id));
            if (!record) return res.status(400).json({ message: "Id do registro não localizado." });
            else return res.status(200).json(record);
        } catch (error) {
            next(error);
        }
    }

    async updateById(req, res, next) {
        try {
            const isUpdated = await this.useCase.updateById(req.params.id, req.body);
            if (!isUpdated) return res.status({ message: "Id do registro não localizado." });
            else return res.status(200).json({ message: "Registro atualizado com sucesso." });
        } catch (error) {
            next(error);
        }
    }

    async deleteById(req, res, next) {
        try {
            const idDeleted = await this.useCase.deleteById(req.params.id);
            if (!idDeleted) return res.status(400).json({ message: "Id do registro não localizado." });
            else return res.status(200).json({ message: "Registro removido com sucesso." });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = Controller;