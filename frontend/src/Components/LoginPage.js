// src/Components/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import appLogo from '../assets/app-logo.png';
import './LoginPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const LoginPage = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // backend URL (use env var if set)
  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:9000';

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // store token / user and update app state
        if (data.token) localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user || { email }));
        localStorage.setItem('isLoggedIn', 'true');
        if (setIsLoggedIn) setIsLoggedIn(true);

        // redirect to home page
        navigate('/home');
      } else {
        setError(data.error || 'Invalid email or password.');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('A network error occurred. Please try again later.');
    }
  };

  const handleSocialLogin = (provider) => {
    // Simulated social login behavior for dev
    console.log(`Attempting login with ${provider}...`);

    // Set a small fake user and mark logged in
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('user', JSON.stringify({ name: `${provider} User`, email: `${provider.toLowerCase()}@example.com` }));
    if (setIsLoggedIn) setIsLoggedIn(true);

    // navigate to the social dashboard (original behavior)
    navigate('/dashboard-upsc');
  };

  return (
    <div className="login-container">
      {/* Optional background decorations */}
      <div className="star-field"></div>
      <div className="gradient-overlay"></div>
      <div className="abstract-pattern-overlay"></div>

      <div className="login-card">
        <div className="login-header">
          <img src={appLogo} alt="Logo" className="login-logo" />
          <h1 className="project-name">VidyaAstra</h1>
        </div>

        <p className="login-subtitle">Sign in to continue your journey</p>

        {error && <div className="login-error-message">{error}</div>}

        <form onSubmit={handleEmailLogin} className="login-form">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button type="submit" className="login-button">Sign In</button>
        </form>

        <div className="social-divider">
          <hr /><span>OR</span><hr />
        </div>

        <div className="social-login-buttons">
          <button className="social-button google" onClick={() => handleSocialLogin('Google')}>
            <FontAwesomeIcon icon={faGoogle} /> <span>Sign in with Google</span>
          </button>
          <button className="social-button linkedin" onClick={() => handleSocialLogin('LinkedIn')}>
            <FontAwesomeIcon icon={faLinkedin} /> <span>Sign in with LinkedIn</span>
          </button>
          <button className="social-button github" onClick={() => handleSocialLogin('GitHub')}>
            <FontAwesomeIcon icon={faGithub} /> <span>Sign in with GitHub</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
