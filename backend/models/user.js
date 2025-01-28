const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    isAdmin: Boolean,
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active',
    },
    is_deleted: {
        type: Boolean,
        default: false,
    },
});

const User = mongoose.model("users", userSchema);

module.exports = User;

