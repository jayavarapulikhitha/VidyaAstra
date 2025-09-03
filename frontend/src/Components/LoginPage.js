import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import appLogo from '../assets/app-logo.png';
import './LoginPage.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleEmailLogin = (e) => {
        e.preventDefault();
        const isLoginSuccessful = true;
        if (isLoginSuccessful) navigate('/dashboard');
        else setError('Invalid credentials');
    };

    const handleSocialLogin = (provider) => {
        console.log(`Login with ${provider}`);
        navigate('/dashboard');
    };

    return (
        <div className="login-container">
            <div className="login-card">
                {/* Logo + Project Name */}
                <div className="login-header">
                    <img src={appLogo} alt="Logo" className="login-logo" />
                    <h1 className="project-name">VidyaAstra</h1>
                </div>

                <p className="login-subtitle">Sign in to continue your journey</p>

                {error && <div className="login-error-message">{error}</div>}

                {/* Email Login Form */}
                <form onSubmit={handleEmailLogin} className="login-form">
                    <input 
                        type="email" 
                        placeholder="Email" 
                        value={email} 
                        onChange={(e)=>setEmail(e.target.value)}
                        required
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={(e)=>setPassword(e.target.value)}
                        required
                    />
                    <button type="submit" className="login-button">Sign In</button>
                </form>

                {/* OR Divider */}
                <div className="social-divider">
                    <hr /><span>OR</span><hr />
                </div>

                {/* Social Buttons */}
                <div className="social-login-buttons">
                    <button className="social-button google" onClick={()=>handleSocialLogin('Google')}>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" className="social-icon" alt="Google"/> Sign in with Google
                    </button>
                    <button className="social-button linkedin" onClick={()=>handleSocialLogin('LinkedIn')}>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" className="social-icon" alt="LinkedIn"/> Sign in with LinkedIn
                    </button>
                    <button className="social-button github" onClick={()=>handleSocialLogin('GitHub')}>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" className="social-icon" alt="GitHub"/> Sign in with GitHub
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
