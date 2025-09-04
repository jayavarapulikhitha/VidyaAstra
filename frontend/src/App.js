// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import your components
import LandingPage from './Components/LandingPage';
import LoginPage from './Components/LoginPage';
import SignUpPage from './Components/SignUpPage';

// Import CSS (optional)
import './Components/LandingPage.css';
import './Components/LoginPage.css';
import './Components/SignUpPage.css';

function App() {
  return (
    <Routes>
      {/* Main landing page */}
      <Route path="/" element={<LandingPage />} />

      {/* Login page */}
      <Route path="/login" element={<LoginPage />} />

      {/* Sign-up page */}
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  );
}

export default App;
