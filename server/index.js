const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(process.env.PORT, () => {
  console.log("server is running on ", process.env.PORT);
});
