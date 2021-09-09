const express = require("express");
const router = express.Router();

// Controllers
const usersController = require("../controllers/usersController");

// GET
router.get("/", usersController.getUsers);

module.exports = router;
