const Cart = require("../Models/cart");


const addToCart = async (req, res) => {
    try{
        const user = req.user;
        const productId = req.body.productId;
        console.log(user, productId);

        const result = await Cart.create({
            productId: productId,
            userId: user.id,
        })
        // console.log(result);
        res.send({msg: "Added To Cart"});
    }catch(e){
        res.send(e);
    }
}


module.exports = {
    addToCart
} 