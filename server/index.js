const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
require("./db");
const morgan = require("morgan");
const router = require("./Routers/router");

app.use(morgan("common"));
app.use(cors());
app.use(express.json());

app.use("/", router);
app.listen(process.env.PORT, () => {
  console.log("server is running on ", process.env.PORT);
});
