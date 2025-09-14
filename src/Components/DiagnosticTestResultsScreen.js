import React, { useState, useEffect } from 'react';
import './DiagnosticTestResultsScreen.css';

const DiagnosticTestResultsScreen = ({ percentage, onGenerateRoadmap }) => {
  const [scoreWidth, setScoreWidth] = useState(0);
  const [knowledgeLevel, setKnowledgeLevel] = useState('');
  const [levelColor, setLevelColor] = useState('');
  const [strengths, setStrengths] = useState([]);
  const [weaknesses, setWeaknesses] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setScoreWidth(percentage);
    }, 100);

    let level = '';
    let color = '';
    if (percentage <= 40) {
      level = 'Explorer (Beginner)';
      color = '#ef4444';
    } else if (percentage <= 70) {
      level = 'Strategist (Intermediate)';
      color = '#eab308';
    } else {
      level = 'Gladiator (Advanced)';
      color = '#22c55e';
    }
    
    setTimeout(() => {
      setKnowledgeLevel(level);
      setLevelColor(color);
    }, 1100);

    // Mock strengths and weaknesses
    setStrengths(['Polity', 'Current Affairs']);
    setWeaknesses(['Geography', 'History']);
  }, [percentage]);

  return (
    <div className="result-screen card">
      <h2 className="page-title">Your Battle Report</h2>
      
      <div className="score-container">
        <div className="score-meter">
          <div 
            className="score-bar" 
            style={{ width: `${scoreWidth}%` }}
          >
            <span className="score-text">{scoreWidth}%</span>
          </div>
        </div>
        
        <div className="knowledge-level-container">
          <p className="knowledge-label">Your Knowledge Level:</p>
          <h3 
            className="knowledge-level" 
            style={{ color: levelColor, opacity: knowledgeLevel ? 1 : 0 }}
          >
            {knowledgeLevel}
          </h3>
        </div>
      </div>

      <div className="badge-container">
        <div className="starter-badge">
          <div className="badge-icon">⭐</div>
          <div className="badge-content">
            <h4>Starter Badge Unlocked!</h4>
            <p>You've begun your great quest!</p>
          </div>
        </div>
      </div>

      <div className="analysis-grid">
        <div className="strengths-container">
          <h4>Strengths</h4>
          <ul>
            {strengths.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        
        <div className="weaknesses-container">
          <h4>Areas for Improvement</h4>
          <ul>
            {weaknesses.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <button className="generate-button" onClick={onGenerateRoadmap}>
        Generate Your Quest Map
      </button>
    </div>
  );
};

export default DiagnosticTestResultsScreen;