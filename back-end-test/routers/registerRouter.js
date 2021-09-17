const express = require("express");
const router = express.Router();

// Middlewares
const validation = require("../middlewares/validation");

// Controllers
const usersController = require("../controllers/usersController");

// POST
router.post(
  "/",
  validation.validateEmail,
  validation.validatePassword,
  usersController.newUser
);

module.exports = router;
