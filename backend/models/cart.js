const mongoose =  require('mongoose');
const cartSchema = mongoose.Schema({
    user: {type: Schema.Types.ObjectId , ref: "users"},
    productId: Array(String),

});
const Cart = mongoose.model("cart", cartSchema);

module.exports = Cart;
