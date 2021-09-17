const User = require("../models/userModel");

// Get all usernames (to not share emails with everybody)
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

// Create a new user, checking beforehand if the email already exists
const newUser = async (req, res) => {
  const userInfo = req.body;

  const checkUser = await User.findOne({ email: userInfo.email });

  if (!checkUser) {
    const user = await User.create(userInfo);
    return res.json({
      status: "OK",
      message: "User has been successfully created",
      data: [user.username, user.email, user._id],
    });
  } else {
    res.json({
      status: "Error",
      message: "This email address has already been used",
    });
  }
};

module.exports = {
  getUsers,
  newUser,
};
