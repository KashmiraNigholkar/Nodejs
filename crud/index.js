const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// MongoDB connection string
const mongo_url = 'mongodb://127.0.0.1:27017/student';

// Connect to MongoDB
mongoose.connect(mongo_url)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("MongoDB connection error:", err));

// Define Schema and Model
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String
});

const User = mongoose.model("Profile", userSchema);

// Routes

// Default route
app.get('/', (req, res) => {
    res.send("Express + MongoDB CRUD API running");
});

// READ: Get all users
app.get('/getData', async (_req, res) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (err) {
        res.status(500).send("Error fetching users");
    }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
