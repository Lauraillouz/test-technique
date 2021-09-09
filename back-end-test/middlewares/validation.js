const express = require("express");
const app = express();
app.use(express.json());

const validateUsername = (req, res, next) => {
  const username = req.body.username;
  const usernameCheck = username.length >= 5;

  if (usernameCheck) {
    return next();
  } else {
    res.json({
      status: "Error",
      message: "The username should contain at least 5 characters",
    });
  }
};

const validateEmail = (req, res, next) => {
  const userEmail = req.body.email;
  const emailSchema = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (emailSchema.test(userEmail)) {
    return next();
  } else {
    res.json({
      status: "Error",
      message: "This email is not valid",
    });
  }
};

const validatePassword = (req, res, next) => {
  const userPassword = req.body.password;
  const passwordSchema = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

  if (passwordSchema.test(userPassword)) {
    return next();
  } else {
    res.json({
      status: "Error",
      message:
        "The password must contain at least 8 characters, including at least: 1 lowercase, 1 uppercase and 1 digit",
    });
  }
};

module.exports = {
  validateUsername,
  validateEmail,
  validatePassword,
};
