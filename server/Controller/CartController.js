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
        let total_count;
        // console.log(result);
        total_count = await Cart.countDocuments({userId: user.id})
        res.send({msg: "Added To Cart", total_count});
    }catch(e){
        res.send(e);
    }
}


module.exports = {
    addToCart
} 