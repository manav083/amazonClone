const Product = require("../Models/product");

const getProducts = async (req, res) => {
  const products = await Product.find();
  res.send(products);
};

const getProdutsByCategories = async (req, res) => {
  try {
    const categories = await Product.find({
      category: req.params.category,
    });
    res.send(categories);
  } catch (err) {
    console.log(err);
  }
};

const getProductById = async (req, res) => {
  try {
    console.log("first", req.params.productId);
    const product = await Product.findOne({ _id: req.params.productId });
    res.send(product);
  } catch (err) {
    console.log(err);
  }
};
module.exports = { getProducts, getProdutsByCategories, getProductById };
