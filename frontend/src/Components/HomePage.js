// src/components/HomePage.js
import React, { useState } from 'react';
import { FaBook, FaCalendarAlt, FaTrophy, FaUserCircle, FaBars, FaBolt, FaRunning, FaRocket, FaQuestionCircle, FaStar, FaChevronRight } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import appLogo from '../assets/app-logo.png';
import './HomePage.css';

const HomePage = () => {
    // We will use state to manage the username
    const [userName, setUserName] = useState("Your Hero Name");

    // These would eventually be props or state from your backend
    const user = {
        streak: 15,
        energy: 85, // 0-100
    };

    const upcomingExams = [
        { name: "UPSC Prelims", date: "May 26, 2026" },
        { name: "State PSC Exam", date: "June 15, 2026" }
    ];

    const upcomingContests = [
        { name: "Polity Mastery Quiz", date: "Today" },
        { name: "History Mega Battle", date: "Tomorrow" }
    ];

    return (
        <div className="home-container">
            {/* --- Top Navigation Bar --- */}
            <header className="home-header">
                <div className="header-left">
                    <NavLink to="/home">
                        <img src={appLogo} alt="VidyaAstra Logo" className="header-logo" />
                        <span className="header-name">VidyaAstra</span>
                    </NavLink>
                </div>
                <div className="header-right">
                    <div className="user-profile">
                        <FaUserCircle className="user-icon" />
                        {/* Display the name from state */}
                        <span>{userName}</span>
                    </div>
                    <FaBars className="menu-icon" />
                </div>
            </header>
            
            {/* --- Temporary input for name (for testing) --- */}
            <div className="name-input-container">
                <label>Change Hero Name:</label>
                <input 
                    type="text" 
                    value={userName} 
                    onChange={(e) => setUserName(e.target.value)} 
                />
            </div>
            
            <main className="home-main-content">
                {/* --- Main Game Hub Dashboard --- */}
                <section className="dashboard-grid">
                    {/* Streaks & Energy */}
                    <div className="stat-card streak-card">
                        <FaRunning className="stat-icon" />
                        <div className="stat-info">
                            <h3>Streak</h3>
                            <span>{user.streak} Days</span>
                        </div>
                    </div>
                    <div className="stat-card energy-card">
                        <div className="energy-bar-container">
                            <div className="energy-bar" style={{ width: `${user.energy}%` }}></div>
                        </div>
                        <div className="stat-info">
                            <FaBolt className="stat-icon-bolt" />
                            <h3>Energy</h3>
                            <span>{user.energy}% Power Left</span>
                        </div>
                    </div>

                    {/* Upcoming Contests */}
                    <div className="info-panel contests-panel">
                        <h2><FaTrophy className="panel-icon" /> Upcoming Contests</h2>
                        <ul>
                            {upcomingContests.map((contest, index) => (
                                <li key={index}>
                                    <span>{contest.name}</span>
                                    <FaChevronRight className="li-arrow" />
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Upcoming Exams */}
                    <div className="info-panel exams-panel">
                        <h2><FaCalendarAlt className="panel-icon" /> Exam Countdown</h2>
                        <ul>
                            {upcomingExams.map((exam, index) => (
                                <li key={index}>
                                    <span>{exam.name}</span>
                                    <FaChevronRight className="li-arrow" />
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </main>

            {/* --- Footer Navigation --- */}
            <footer className="main-footer">
                <NavLink to="/roadmap" className="footer-link"><FaBook /> Roadmap</NavLink>
                <NavLink to="/contests" className="footer-link"><FaTrophy /> Contests</NavLink>
                <NavLink to="/doubts" className="footer-link"><FaQuestionCircle /> Doubts</NavLink>
                <NavLink to="/leaderboard" className="footer-link"><FaStar /> Leaderboard</NavLink>
            </footer>
        </div>
    );
};

export default HomePage;