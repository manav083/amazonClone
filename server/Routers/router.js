const express = require("express");
const ProductController = require("../Controller/ProductController");
const app = express();
const UserController = require("../Controller/UserController");

const auth = require("../Middleware/auth");

app.get("/", (req, res) => {
  res.json({
    result: "Success!",
  });
});

app.post("/login", UserController.Login);

app.post("/register", UserController.Register);

app.get("/getProducts", ProductController.getProducts);
app.get(
  "/getProdutsByCategories/:category",
  ProductController.getProdutsByCategories
);

module.exports = app;
