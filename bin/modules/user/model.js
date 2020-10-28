const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50,
    },
});

const User = mongoose.model("User", userSchema);

exports.User = User;
