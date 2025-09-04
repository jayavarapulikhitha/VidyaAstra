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
            const isLoginSuccessful = true; // Placeholder for backend logic
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
