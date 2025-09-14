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

        try {
            const res = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const data = await res.json();

            if (res.ok) {
                // Save token and user info
                localStorage.setItem('token', data.token);
                localStorage.setItem('userId', data.user.id);

                // Redirect based on first-time flag
                if (data.user.isFirstTime) {
                    navigate('/stream-selection');
                } else {
                    navigate('/home');
                }
            } else {
                setError(data.message || 'Login failed');
            }
        } catch (err) {
            setError('Server error. Try again.');
            console.error(err);
        }
    };

    const handleSocialLogin = (provider) => {
        console.log(`Social login clicked: ${provider}`);
        // You can integrate OAuth later
        // For now, navigate to stream selection or home as placeholder
        const isFirstTime = !localStorage.getItem('hasSelectedStream');
        if (isFirstTime) navigate('/stream-selection');
        else navigate('/home');
    };

    return (
        <div className="login-container">
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
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        value={password}
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit" className="login-button">Sign In</button>
                </form>

                <div className="social-divider">
                    <hr /><span>OR</span><hr />
                </div>

                <div className="social-login-buttons">
                    <button className="social-button google" onClick={() => handleSocialLogin('Google')}>Sign in with Google</button>
                    <button className="social-button linkedin" onClick={() => handleSocialLogin('LinkedIn')}>Sign in with LinkedIn</button>
                    <button className="social-button github" onClick={() => handleSocialLogin('GitHub')}>Sign in with GitHub</button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
