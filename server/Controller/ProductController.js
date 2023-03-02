const Product = require("../Models/product");

const getProducts = async (req, res) => {
  const products = await Product.find();
  res.send(products);
};

module.exports = { getProducts };
