const Cart = require("../Models/cart");


const getCartDetails = async (req, res) => {
    try {
        const user = req.user;
        const products = await Cart.find({ userId: user.id }).populate("productId");
        const total_count = await Cart.countDocuments({ userId: user.id });
        res.send({ products, total_count });
    } catch (e) {
        res.send(e);
    }
}


const addToCart = async (req, res) => {
    try {
        const user = req.user;
        const productId = req.body.productId;
        // console.log("productId", productId);

        const result =   await Cart.create({
            productId: productId,
            userId: user.id,
        })

        // console.log("result::::", result);
        res.send({
            msg: "Added To Cart",
            result
        });
    } catch (e) {
        res.send(e);
    }
}

const deleteFromCart = async (req, res) => {
    try{
        const cartId = req.params.cartId;
        const res = await Cart.deleteOne({_id: cartId});

        // console.log(res);
        res.send("hello");

    }catch(e){
        res.send(e);
    }
}


module.exports = {
    addToCart,
    getCartDetails,
    deleteFromCart
} 