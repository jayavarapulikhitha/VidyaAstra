// src/Components/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import appLogo from '../assets/app-logo.png';
import './LoginPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleEmailLogin = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            
            const data = await response.json();

            if (response.ok) {
                console.log('Login successful!', data);
                // Store the JWT token and user info
                localStorage.setItem('token', data.token);
                localStorage.setItem('user', JSON.stringify(data.user));
                
                // Navigate to the dashboard
                navigate('/dashboard');
            } else {
                setError(data.error || 'Invalid email or password.');
            }
        } catch (err) {
            setError('A network error occurred. Please try again later.');
            console.error(err);
        }
    };

    const handleSocialLogin = (provider) => {
        console.log(`Attempting login with ${provider}...`);
        setTimeout(() => {
            console.log(`${provider} login successful!`);
            navigate('/dashboard-upsc');
        }, 1000);
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
                        Sign in with Google
                    </button>
                    <button className="social-button linkedin" onClick={() => handleSocialLogin('LinkedIn')}>
                        Sign in with LinkedIn
                    </button>
                    <button className="social-button github" onClick={() => handleSocialLogin('GitHub')}>
                        Sign in with GitHub
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;