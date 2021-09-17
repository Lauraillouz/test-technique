const User = require("../models/userModel");

// Get all usernames (to not share emails with everybody)
const getUsers = async (_req, res) => {
  try {
    const users = await User.find();
    const usersList = users.map((user) => {
      return user.username;
    });

    if (users) {
      return res.status(202).json({
        status: "OK",
        data: usersList,
      });
    }
  } catch (err) {
    res.status(404).json({
      message: err,
    });
  }
};

// Create a new user, checking beforehand if the email already exists
const newUser = async (req, res) => {
  const userInfo = req.body;

  try {
    const user = await User.findOne({ email: userInfo.email });

    if (!user) {
      // Hash password before saving to database
      const hashedPassword = await bcrypt.hash(userInfo.password, 12);
      const user = await User.create({
        username: userInfo.username,
        email: userInfo.email,
        password: hashedPassword,
      });
      return res.status(202).json({
        status: "OK",
        message: "User has been successfully created",
        data: user,
      });
    } else {
      return res.status(403).json({
        status: "Error",
        message: "This email address has already been used",
      });
    }
  } catch (err) {
    res.status(404).json({
      message: err,
    });
  }
};

const getToken = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    // Verify user exists
    if (!user) {
      res.stauts(404).json({
        message: "User does not exist or email/password invalid",
      });
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      res.status(403).json({
        message:
          "Access denied. Please create an account or enter a valid email/password",
      });
    }

    // Create token and give cookie
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECURE, {
      expiresIn: "7d",
    });
    res.cookie("jwt", token, { httpOnly: true, secure: false });
    res.json({
      message: "Cookie successfully created",
    });
  } catch (err) {
    res.json({
      message: err,
    });
  }
};

module.exports = {
  getUsers,
  newUser,
  getToken,
};
