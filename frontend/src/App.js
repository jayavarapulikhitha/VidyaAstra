// src/App.js
import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import HomePage from './Components/HomePage';

import './Components/LandingPage.css'; // Don't forget to import the CSS files
import './Components/HomePage.css';

function App() {
  const navigate = useNavigate();

  const handleStartExpedition = () => {
    // Navigate to the /home path instead of just changing a state variable
    navigate('/home');
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage onStart={handleStartExpedition} />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;