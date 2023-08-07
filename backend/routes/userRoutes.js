const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userControllers");
const router = express.Router();
const dotenv = require("dotenv");
const { protect } = require("../middleware/authMiddleware");
dotenv.config();

// Get all users
router.route("/").get(protect, allUsers);

// Login user
router.post("/login", authUser);

// Register user (with cloudinaryUrl response)
router.route("/").post(registerUser);

module.exports = router;
