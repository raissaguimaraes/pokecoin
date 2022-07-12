const UserModel = require('../models/user');

module.exports = async (req, res) => {
    const users = await UserModel.find();
    res.json(users);
}