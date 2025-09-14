import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Components
import LandingPage from './Components/LandingPage';
import LoginPage from './Components/LoginPage';
import SignUpPage from './Components/SignUpPage';
import StreamSelectionPage from './Components/StreamSelectionPage';
import HomePage from './Components/HomePageUpsc';
import DashboardUpsc from './Components/DashboardUpsc';
import HomeContest from './Components/HomeContest';
import HomeRoadMap from './Components/HomeRoadMap';
import HomeDoubts from './Components/HomeDoubts';
import MockTests from './Components/MockTest';
import DiagnosticTest from './Components/DiagnosticTest';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasSelectedStream, setHasSelectedStream] = useState(false);
  const [hasTakenDiagnosticTest, setHasTakenDiagnosticTest] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const streamSelected = localStorage.getItem('hasSelectedStream') === 'true';
    const diagnosticDone = localStorage.getItem('hasTakenDiagnosticTest') === 'true';

    setIsLoggedIn(loggedIn);
    setHasSelectedStream(streamSelected);
    setHasTakenDiagnosticTest(diagnosticDone);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
      <Route path="/signup" element={<SignUpPage setIsLoggedIn={setIsLoggedIn} />} />
      <Route
        path="/stream-selection"
        element={<StreamSelectionPage setHasSelectedStream={setHasSelectedStream} />}
      />

      {/* Redirect to Diagnostic Test if user hasn't taken it yet */}
      <Route
        path="/home"
        element={
          !hasTakenDiagnosticTest ? (
            <Navigate to="/diagnostic-test" replace />
          ) : (
            <HomePage />
          )
        }
      />

      <Route path="/dashboard-upsc" element={<DashboardUpsc />} />
      <Route path="/contests" element={<HomeContest />} />
      <Route path="/roadmap" element={<HomeRoadMap />} />
      <Route path="/doubts" element={<HomeDoubts />} />
      <Route path="/mock-tests" element={<MockTests />} />
      <Route
        path="/diagnostic-test"
        element={
          <DiagnosticTest
            onFinishTest={() => {
              localStorage.setItem('hasTakenDiagnosticTest', 'true');
              setHasTakenDiagnosticTest(true);
            }}
          />
        }
      />
    </Routes>
  );
}

export default App;
