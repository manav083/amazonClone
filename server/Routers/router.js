const express = require("express");
const app = express();


const auth = require("../Middleware/auth");

app.get("/", (req, res) => {
    res.json({
        result: "Success!"
    });

});



module.exports = app;