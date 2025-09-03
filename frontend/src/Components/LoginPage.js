import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import appLogo from '../assets/app-logo.png';
import './LoginPage.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleEmailLogin = async (e) => {
        e.preventDefault();
        setError('');
        
        console.log('Attempting email login with:', email, password);

        try {
            const isLoginSuccessful = true; // Placeholder for your backend call
            if (isLoginSuccessful) {
                console.log('Email login successful!');
                navigate('/dashboard');
            } else {
                setError('Invalid email or password.');
            }
        } catch (err) {
            setError('Login failed. Please check your credentials.');
            console.error(err);
        }
    };

    const handleSocialLogin = (provider) => {
        console.log(`Attempting login with ${provider}...`);
        
        setTimeout(() => {
            console.log(`${provider} login successful!`);
            navigate('/dashboard');
        }, 1000);
    };

    return (
        <div className="login-container">
            {/* --- Dynamic Background Elements --- */}
            <div className="star-field"></div>
            <div className="gradient-overlay"></div>
            <div className="abstract-pattern-overlay"></div>

            <div className="login-card">
                <img src={appLogo} alt="VidyaAstra Logo" className="login-logo" />
                <h2 className="login-title">Begin Your Expedition</h2>
                <p className="login-subtitle">Forge your path to success</p>
                
                {error && <div className="login-error-message">{error}</div>}

                <form onSubmit={handleEmailLogin} className="login-form">
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
                        Sign In with Email
                    </button>
                </form>

                <div className="social-divider">
                    <hr />
                    <span>OR</span>
                    <hr />
                </div>
                
                <div className="social-login-buttons">
                    <button
                        className="social-button google-btn"
                        onClick={() => handleSocialLogin('Google')}
                    >
                        <i className="fab fa-google"></i>
                        Sign In with Google
                    </button>
                    <button
                        className="social-button linkedin-btn"
                        onClick={() => handleSocialLogin('LinkedIn')}
                    >
                        <i className="fab fa-linkedin"></i>
                        Sign In with LinkedIn
                    </button>
                    <button
                        className="social-button twitter-btn"
                        onClick={() => handleSocialLogin('Twitter')}
                    >
                        <i className="fab fa-twitter"></i>
                        Sign In with X (Twitter)
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;