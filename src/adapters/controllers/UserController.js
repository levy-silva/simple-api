const Controller = require("./controller.js");

class UserController extends Controller {
    constructor(userUseCase) {
        super(userUseCase);
    }

    async createUser(req, res, next) {
        try {
            const newUser = await this.useCase.create(req.body);
            return res.status(201).json({ message: "User created successfully.", record: newUser });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = UserController;