const User = require("../models/user");

async function handleAllUsers(req, res) {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function handlePostUser(req, res) {
  try {
    const { FirstName, LastName, Email, PhoneNumber, Company, JobTitle } =
      req.body;

    if (!FirstName || !LastName || !Email) {
      return res
        .status(400)
        .json({ error: "FirstName, LastName, and Email are required." });
    }

    const user = new User({
      FirstName,
      LastName,
      Email,
      PhoneNumber,
      Company,
      JobTitle,
    });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async function handleGetUser(req, res) {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function handleUpdateUser(req, res) {
  const { id } = req.params;
  try {
    const updatedUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function handleDeleteUser(req, res) {
  const { id } = req.params;
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(deletedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = {
  handleAllUsers,
  handlePostUser,
  handleGetUser,
  handleUpdateUser,
  handleDeleteUser,
};
