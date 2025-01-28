const mongoose =  require('mongoose');
const wishlistSchema = mongoose.Schema({
    user: {type: Schema.Types.ObjectId , ref: "users"},
    productId: Array(String),

});
const Wishlist = mongoose.model("wishlist", wishlistSchema);

module.exports = Wishlist;
