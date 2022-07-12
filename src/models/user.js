const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    idWallet: {
        type: Number,
    }
});

const UserModel = mongoose.model('pokecoinapp', UserSchema);

module.exports= UserModel;
