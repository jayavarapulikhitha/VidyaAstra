import React from 'react';
import './DiagnosticTestIntroScreen.css';

const DiagnosticTestIntroScreen = ({ onStartTest }) => {
  return (
    <div className="intro-screen card">
      <h1 className="page-title">Welcome, Aspirant!</h1>
      <p className="intro-text">
        Before we build your quest map, let's see where you stand. Think of this as your entry battle into the world of UPSC prep!
      </p>
      <div className="info-box">
        <p>This customized test will help us forge a 100% personalized roadmap for your success.</p>
        <p className="duration"><strong>Duration:</strong> Approx. 20-30 minutes</p>
      </div>
      <button className="start-button" onClick={onStartTest}>
        Start the Battle!
      </button>
    </div>
  );
};

export default DiagnosticTestIntroScreen;