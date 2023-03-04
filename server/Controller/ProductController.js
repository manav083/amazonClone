const Product = require("../Models/product");

const getProducts = async (req, res) => {
  const products = await Product.find();
  res.send(products);
};

const getProdutsByCategories = async (req, res) => {
  const categories = await Product.find({
    category: req.params.category,
  });
  res.send(categories);
};
module.exports = { getProducts, getProdutsByCategories };
