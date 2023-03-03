const mongoose = require("mongoose");


mongoose.set("strictQuery", true);

mongoose.connect(process.env.ConnectionString, { useUnifiedTopology: true, useNewUrlParser: true }).then((msg) => {
    console.log("mongodb connected");
}).catch((err) => console.log("connection failed!", err));

module.exports = mongoose;