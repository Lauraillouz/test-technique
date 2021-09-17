const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const checkToken = async (req, res, next) => {
  try {
    const data = jwt.verify(req.cookies.jwt, process.env.JWT_SECURE);
    req.cookies.jwtData = data;

    if (Date.now() >= data.exp * 1000) {
      res.clearCookie("jwt");
      return res.status(403).json({
        message: "Access denied. Your token is invalid",
      });
    }

    const user = await User.findOne({ _id: data.id });
    if (user) {
      next();
    } else {
      res.status(403).json({
        message: "Access denied. Invalid token",
      });
    }
  } catch (err) {
    return res.json({
      message: err,
    });
  }
};

module.exports = checkToken;
