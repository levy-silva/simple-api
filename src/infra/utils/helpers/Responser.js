class Responser {
    constructor(message, status) {
        this.message = message;
        this.status = status;
    }

    report(res) {
        res.status(this.status).json({
            message: this.message,
            status: this.status,
        });
    }
}

module.exports = Responser;