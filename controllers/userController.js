const { User } = require("../models");

module.exports = {
  //get all the users
  async getAllUsers(req, res) {
    try {
      const users = await User.find()
        .populate("thoughts")
        .populate("friends");;
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
}
