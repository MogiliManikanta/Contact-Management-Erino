const express = require("express");
const {
  handleAllUsers,
  handlePostUser,
  handleGetUser,
  handleUpdateUser,
  handleDeleteUser,
} = require("../controllers/user");

const router = express.Router();

router.get("/", handleAllUsers); // For fetching all users
router.post("/", handlePostUser); // For creating a new user
router.get("/:id", handleGetUser); // For fetching a specific user by ID
router.put("/:id", handleUpdateUser); // For updating a user by ID
router.delete("/:id", handleDeleteUser); // For deleting a user by ID

module.exports = router;
