const express = require("express");
const router = express.Router();

// Controller
const usersController = require("../controllers/usersController");

router.post("/", usersController.getToken);

module.exports = router;
