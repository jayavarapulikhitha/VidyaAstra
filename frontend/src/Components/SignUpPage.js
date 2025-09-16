// src/Components/SignUpPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import appLogo from '../assets/app-logo.png';
import './LoginPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const SignUpPage = ({ setIsLoggedIn }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:9000';

  const handleEmailSignUp = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch(`${API_URL}/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // mark as logged in (for dev flow)
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('user', JSON.stringify({ name, email }));
        if (setIsLoggedIn) setIsLoggedIn(true);

        // redirect to stream selection (as you expected)
        navigate('/stream-selection');
      } else {
        setError(data.error || 'Sign Up failed. Try again.');
      }
    } catch (err) {
      console.error('Signup error:', err);
      setError('A network error occurred. Please try again later.');
    }
  };

  const handleSocialSignUp = (provider) => {
    console.log(`Sign Up with ${provider}`);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('user', JSON.stringify({ name: `${provider} User`, email: `${provider.toLowerCase()}@example.com` }));
    if (setIsLoggedIn) setIsLoggedIn(true);

    // social signup -> stream selection
    navigate('/stream-selection');
  };

  return (
    <div className="login-container">
      <div className="star-field"></div>
      <div className="gradient-overlay"></div>
      <div className="abstract-pattern-overlay"></div>

      <div className="login-card">
        <img src={appLogo} alt="App Logo" className="login-logo" />
        <h2 className="login-title">Create Your Account</h2>
        <p className="login-subtitle">Join the adventure today</p>

        {error && <div className="login-error-message">{error}</div>}

        <form onSubmit={handleEmailSignUp} className="login-form">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button type="submit" className="login-button email-login-btn">
            Sign Up with Email
          </button>
        </form>

        <div className="social-divider">
          <hr /><span>OR</span><hr />
        </div>

        <div className="social-login-buttons">
          <button className="social-button google-btn" onClick={() => handleSocialSignUp('Google')}>
            <FontAwesomeIcon icon={faGoogle} /> <span>Sign Up with Google</span>
          </button>
          <button className="social-button linkedin-btn" onClick={() => handleSocialSignUp('LinkedIn')}>
            <FontAwesomeIcon icon={faLinkedin} /> <span>Sign Up with LinkedIn</span>
          </button>
          <button className="social-button github-btn" onClick={() => handleSocialSignUp('GitHub')}>
            <FontAwesomeIcon icon={faGithub} /> <span>Sign Up with GitHub</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
