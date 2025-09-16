// server.js

// Import necessary modules
const express = require('express');
const mongoose = require('mongoose'); // Import Mongoose
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const app = express();
const PORT = 3000;
const SECRET_KEY = 'VidyaAstra'; // CHANGE THIS TO A STRONG, RANDOM KEY!

// Middleware
app.use(express.json()); // Allows us to read JSON from the request body
app.use(cors()); // Enable CORS for all routes

// Set up MongoDB connection
const mongoUri = 'mongodb://localhost:27017/vidyaastra_db'; // Change this if you use MongoDB Atlas
mongoose.connect(mongoUri)
    .then(() => console.log('MongoDB connected successfully!'))
    .catch(err => console.error('MongoDB connection error:', err));

// Define a Mongoose Schema for the User model
const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password_hash: { type: String, required: true },
});

// Create the Mongoose model
const User = mongoose.model('User', UserSchema);

/* ===== API Endpoints ===== */

// Route for user signup
app.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ error: 'Please enter all fields.' });
    }

    try {
        // Hash the password
        const password_hash = await bcrypt.hash(password, 10);
        
        // Create a new user document
        const newUser = await User.create({
            name,
            email,
            password_hash
        });
        
        res.status(201).json({ 
            message: 'Account created successfully!',
            userId: newUser._id
        });
    } catch (err) {
        if (err.code === 11000) { // MongoDB duplicate key error code
            return res.status(409).json({ error: 'An account with this email already exists.' });
        }
        console.error(err);
        res.status(500).json({ error: 'Server error during signup.' });
    }
});

// Route for user login
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Please enter all fields.' });
    }

    try {
        // Find a user by their email
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ error: 'Invalid email or password.' });
        }

        // Compare the provided password with the stored hash
        const isMatch = await bcrypt.compare(password, user.password_hash);
        
        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid email or password.' });
        }

        // Passwords match, generate a JWT token
        const token = jwt.sign(
            { userId: user._id, email: user.email }, 
            SECRET_KEY, 
            { expiresIn: '1h' }
        );

        res.json({
            message: 'Login successful!',
            token,
            user: { id: user._id, name: user.name, email: user.email }
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error during login.' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});