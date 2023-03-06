const express = require("express");
const ProductController = require("../Controller/ProductController");
const CartController = require("../Controller/CartController");
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

app.get("/getProductById/:productId", ProductController.getProductById);
app.get("/getSearchOptions/:searchParams", ProductController.getSearchOptions);

app.post("/addToCart", auth, CartController.addToCart);


module.exports = app;
