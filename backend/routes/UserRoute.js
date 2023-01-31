const { getUser, addUser, getUserById, updateUser, deleteUser } = require("../controller/UserController.js");

const express = require("express");
const router = express.Router();

// Get User Data
router.get("/users", getUser);
router.get("/user/:id", getUserById);

// Add Another User
router.post("/user/create", addUser)

// Update User
router.patch("/user/:id", updateUser)

// Delete User
router.delete("/user/:id", deleteUser)
module.exports = router;
