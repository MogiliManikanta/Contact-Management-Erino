const express = require("express");
const connectDB = require("./connectDB");
const cors = require("cors");
const PORT = 8000;
const app = express();
const userRouter = require("./routes/userRouter");

app.use(cors({ 
  origin: ["https://Contact-Management-123.vercel.app"], // Update if needed
  methods: ["POST", "GET"], // Corrected to an array
  credentials: true 
})); // Allow frontend origin

app.use(express.json());

// Import the User model
const User = require("./models/user");

// MongoDB Connection
connectDB();

// Routes
app.use("/contacts", userRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
