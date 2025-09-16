import React, { useState } from 'react';
import './HomeRoadMap.css';

// Example streams and topics
const streams = {
  UPSC: ['Polity', 'History', 'Geography', 'Economy', 'Environment'],
  AI: ['Python Basics', 'Data Science', 'Machine Learning', 'Deep Learning', 'Projects'],
};

// Level XP thresholds
const levelXP = [0, 20, 40, 60, 80, 100]; // Example XP required per level

const Roadmap = () => {
  const [selectedStream, setSelectedStream] = useState('');
  const [testScore, setTestScore] = useState(null);
  const [levels, setLevels] = useState([]);

  // Simulate diagnostic test
  const handleTestSubmit = () => {
    if (!selectedStream) return;

    // Example: random score out of 100
    const score = Math.floor(Math.random() * 101);
    setTestScore(score);

    // Generate roadmap dynamically based on score
    const unlockedLevels = streams[selectedStream].map((topic, index) => ({
      topic,
      level: index + 1,
      unlocked: score >= levelXP[index], // unlock logic
      xp: score >= levelXP[index] ? 10 * (index + 1) : 0,
    }));

    setLevels(unlockedLevels);
  };

  return (
    <div className="roadmap-container">
      <h1 className="roadmap-title">Your Personalized Roadmap</h1>

      {/* Stream Selection */}
      {!testScore && (
        <div className="stream-selection">
          <label>Select your stream: </label>
          <select
            value={selectedStream}
            onChange={(e) => setSelectedStream(e.target.value)}
          >
            <option value="">--Choose--</option>
            {Object.keys(streams).map((stream) => (
              <option key={stream} value={stream}>
                {stream}
              </option>
            ))}
          </select>
          <button className="btn-start-test" onClick={handleTestSubmit}>
            Take Diagnostic Test
          </button>
        </div>
      )}

      {/* Display Test Score */}
      {testScore !== null && (
        <div className="test-score">
          <h2>Diagnostic Test Score: {testScore}/100</h2>
        </div>
      )}

      {/* Candy Crush–Style Roadmap */}
      {levels.length > 0 && (
        <div className="levels-container">
          {levels.map((lvl) => (
            <div
              key={lvl.level}
              className={`level-card ${lvl.unlocked ? 'unlocked' : 'locked'}`}
            >
              <h3>Level {lvl.level}</h3>
              <p>{lvl.topic}</p>
              {lvl.unlocked ? (
                <p className="xp-earned">XP: {lvl.xp}</p>
              ) : (
                <p className="locked-text">Locked</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Roadmap;
