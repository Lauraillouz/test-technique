const express = require("express");
const router = express.Router();
// Libraries
/* const expressValidator = require("express-validator");
const passwordValidator = require("password-validator"); */
// Middlewares
const validation = require("../middlewares/validation");

// Controllers
const usersController = require("../controllers/usersController");

// POST
router.post(
  "/",
  validation.validateUsername,
  validation.validateEmail,
  validation.validatePassword,
  usersController.newUser
);

module.exports = router;
