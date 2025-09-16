// server.js

const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const PORT = 9000; // ✅ changed from 3000 to 9000
const SECRET_KEY = 'VidyaAstra'; // CHANGE THIS TO A STRONG, RANDOM KEY!

// Middleware
app.use(express.json());

// ✅ Allow React dev server (localhost:3000) to access backend
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

// MongoDB connection
const mongoUri = 'mongodb://localhost:27017/vidyaastra_db'; 
mongoose.connect(mongoUri)
  .then(() => console.log('✅ MongoDB connected successfully!'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// User Schema
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password_hash: { type: String, required: true },
});

const User = mongoose.model('User', UserSchema);

/* ===== API Endpoints ===== */

// Signup
app.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Please enter all fields.' });
  }

  try {
    const password_hash = await bcrypt.hash(password, 10);

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
    if (err.code === 11000) {
      return res.status(409).json({ error: 'An account with this email already exists.' });
    }
    console.error(err);
    res.status(500).json({ error: 'Server error during signup.' });
  }
});

// Login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Please enter all fields.' });
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password.' });
    }

    const isMatch = await bcrypt.compare(password, user.password_hash);

    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid email or password.' });
    }

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

// Server listen
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
