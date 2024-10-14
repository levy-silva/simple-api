const express = require("express");
const userRoutes = require("./userRoutes.js");

const router = (app) => {
    app.route("/").get((req, res) => res.json({ message: "Root route listening." }));
    app.use(
        express.json(),
        userRoutes,
    );
}

module.exports = router;