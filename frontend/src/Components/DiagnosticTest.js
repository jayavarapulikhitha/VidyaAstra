import React, { useState } from 'react';
import DiagnosticTestIntroScreen from './DiagnosticTestIntroScreen';
import DiagnosticTestUpsc from './DiagnosticTestUpsc';
import DiagnosticTestResultsScreen from './DiagnosticTestResultsScreen';
import './DiagnosticTest.css';

const DiagnosticTest = () => {
  const [currentScreen, setCurrentScreen] = useState('intro');
  const [userAnswers, setUserAnswers] = useState([]);
  const [scorePercentage, setScorePercentage] = useState(0);

  const switchScreen = (screen) => {
    setCurrentScreen(screen);
  };

  return (
    <div className="diagnostic-test-container">
      {currentScreen === 'intro' && (
        <DiagnosticTestIntroScreen onStartTest={() => switchScreen('test')} />
      )}
      {currentScreen === 'test' && (
        <DiagnosticTestUpsc 
          onFinishTest={(answers, percentage) => {
            setUserAnswers(answers);
            setScorePercentage(percentage);
            switchScreen('result');
          }}
        />
      )}
      {currentScreen === 'result' && (
        <DiagnosticTestResultsScreen 
          percentage={scorePercentage}
          onGenerateRoadmap={() => switchScreen('intro')}
        />
      )}
    </div>
  );
};

export default DiagnosticTest;