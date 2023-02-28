const express = require("express");
const app = express();
const UserController = require("../Controller/UserController")


const auth = require("../Middleware/auth");

app.get("/", (req, res) => {
    res.json({
        result: "Success!"
    });

});

app.post("/login", UserController.Login);

app.post("/register", UserController.Register);




module.exports = app;