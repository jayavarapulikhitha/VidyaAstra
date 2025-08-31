// src/components/LandingPage.js
import React from 'react';
import './LandingPage.css';
import appLogo from '../assets/app-logo.png';

const LandingPage = ({ onStart }) => {
    return (
        <div className="landing-container">
            <div className="star-field"></div>
            <div className="gradient-overlay"></div>
            <div className="abstract-pattern-overlay"></div>

            <header className="landing-header">
                {/* --- Updated Header with Logo and Name --- */}
                <div className="header-left">
                    <img src={appLogo} alt="VidyaAstra Logo" className="app-logo" />
                    <span className="header-name">VidyaAstra</span>
                </div>
                {/* --- Title & Tagline --- */}
                <h1>Your Path to Future</h1>
                <p className="tagline">Forge your knowledge. Sharpen your skills. Achieve your dreams.</p>
            </header>

            <main className="landing-main">
                <section className="feature-highlight">
                    <div className="feature-card animated-card">
                        <span className="icon">🏆</span>
                        <h3>Gamified Quests</h3>
                        <p>Embark on daily challenges to conquer your syllabus and earn rewards.</p>
                    </div>
                    <div className="feature-card animated-card">
                        <span className="icon">🗺️</span>
                        <h3>Strategic Roadmap</h3>
                        <p>Navigate a personalized study path designed for your ultimate success.</p>
                    </div>
                    <div className="feature-card animated-card">
                        <span className="icon">🤖</span>
                        <h3>AI Mentor</h3>
                        <p>Your intelligent companion for instant doubts and tailored motivation.</p>
                    </div>
                </section>

                <button className="start-button pulsate-glow" onClick={onStart}>
                    Begin Your Grand Expedition!
                    <span className="arrow-icon">→</span>
                </button>
            </main>

            <footer className="landing-footer">
                <p>&copy; 2025 VidyaAstra. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;