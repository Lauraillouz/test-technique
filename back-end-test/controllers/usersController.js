const User = require("../models/userModel");

const getUsers = async (_req, res) => {
  const users = await User.find();
  const usersList = users.map((user) => {
    return user.username;
  });

  if (users) {
    res.json({
      status: "OK",
      data: usersList,
    });
  }
};

module.exports = {
  getUsers: getUsers,
};
