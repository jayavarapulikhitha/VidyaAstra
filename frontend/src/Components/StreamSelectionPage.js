import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StreamSelectionPage.css';

const StreamSelectionPage = () => {
  const navigate = useNavigate();

  const handleSelectStream = (stream) => {
    localStorage.setItem('selectedStream', stream);
    localStorage.setItem('hasSelectedStream', true);
    navigate('/home'); // Redirect to home after selection
  };

  return (
    <div className="stream-selection-container">
      <h2>Select Your Stream</h2>
      <div className="stream-options">
        <button className="stream-button" onClick={() => handleSelectStream('UPSC')}>UPSC</button>
        <button className="stream-button" onClick={() => handleSelectStream('SSC')}>SSC</button>
        <button className="stream-button" onClick={() => handleSelectStream('GATE')}>GATE</button>
      </div>
    </div>
  );
};

export default StreamSelectionPage;
