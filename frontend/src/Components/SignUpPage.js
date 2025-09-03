import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import appLogo from '../assets/app-logo.png';
import './LoginPage.css'; // reuse same styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleEmailSignUp = (e) => {
    e.preventDefault();
    setError('');
    // Replace with backend call
    const isSignUpSuccessful = true;
    if (isSignUpSuccessful) {
      navigate('/dashboard');
    } else {
      setError('Sign Up failed. Try again.');
    }
  };

  const handleSocialSignUp = (provider) => {
    console.log(`Sign Up with ${provider}`);
    setTimeout(() => navigate('/dashboard'), 1000);
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
            <FontAwesomeIcon icon={faGoogle} /> Sign Up with Google
          </button>
          <button className="social-button linkedin-btn" onClick={() => handleSocialSignUp('LinkedIn')}>
            <FontAwesomeIcon icon={faLinkedin} /> Sign Up with LinkedIn
          </button>
          <button className="social-button github-btn" onClick={() => handleSocialSignUp('GitHub')}>
            <FontAwesomeIcon icon={faGithub} /> Sign Up with GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
