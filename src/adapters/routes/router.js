const express = require("express");

const router = (app) => {
    app.route("/").get((req, res) => res.json({ message: "Root route listening." }));
    app.use(express.json());
}

module.exports = router;