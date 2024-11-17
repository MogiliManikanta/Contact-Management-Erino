const express = require("express");
const connectDB = require("./connectDB");
const cors = require("cors");
const PORT = 8000;
const app = express();
const userRouter = require("./routes/userRouter");

app.use(cors({ origin: "http://localhost:3000" })); // Allow frontend origin
app.use(express.json());

// Import the User model
const User = require("./models/user");

// MongoDB Connection
connectDB();

app.use("/contacts", userRouter);

// Create a new user

// Get a user by ID

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
