const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    phone_number: {type: Number, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    user_type: {type: String, default: "buyer"},
    token: {type: String},
})

module.exports = mongoose.model("user", userSchema);