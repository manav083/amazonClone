const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "product",
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

const Cart = mongoose.model("cart", cartSchema);

module.exports = Cart;
