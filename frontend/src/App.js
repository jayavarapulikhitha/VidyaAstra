// src/App.js
import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

// Import your components
import LandingPage from './Components/LandingPage';

// Import your CSS files
import './Components/LandingPage.css';

function App() {
  const navigate = useNavigate();

  // You can decide where the main button on the landing page goes.
  // I'll make it go to the signup page for the first user journey.
  const handleStartExpedition = () => {
    navigate('/signup');
  };

  return (
    <div className="App">
      <Routes>
        {/* Route for the landing page */}
        <Route path="/" element={<LandingPage onStart={handleStartExpedition} />} />

      </Routes>
    </div>
  );
}

export default App;