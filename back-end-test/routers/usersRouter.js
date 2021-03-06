const express = require("express");
const router = express.Router();

// Controllers
const usersController = require("../controllers/usersController");

// Middleware
const checkToken = require("../middlewares/checkToken");

// GET
router.get("/", checkToken, usersController.getUsers);

module.exports = router;
