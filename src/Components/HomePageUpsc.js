// src/Components/HomePageUpsc.js
import React, { useState, useEffect, useRef } from "react";
import {
  Trophy,
  Map,
  MessageCircle,
  Search,
  X,
  Clock,
  Lightbulb,
  ClipboardList,
  FlaskConical,
  Swords,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./HomePageUpsc.css";

const HomePageUpsc = () => {
  const [userName] = useState("Tejaswini");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navigate = useNavigate();
  const profileRef = useRef();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleOptionClick = (option) => {
    setDropdownOpen(false);
    if (option === "profile") {
      navigate("/dashboard-upsc");
    } else if (option === "settings") {
      alert("Settings Page Coming Soon!");
    } else if (option === "logout") {
      alert("Logged out!");
    }
  };

  // Dummy data
  const personalDeadlines = [
    { name: "Finish Polity Basics", daysLeft: 3 },
    { name: "Revise Modern History", daysLeft: 7 },
  ];
  const nextOfficialExams = [
    { name: "UPSC Prelims 2026", daysLeft: 263 },
    { name: "UPSC Mains 2026", daysLeft: 381 },
  ];
  const todayRoadmap = [
    { id: 1, task: "Solve 20 Current Affairs MCQs" },
    { id: 2, task: "Watch Economy Crash Course" },
  ];
  const nextContest = {
    id: 1,
    name: "Current Affairs Lightning",
    date: "Tomorrow",
    time: "8:00 PM",
    participants: 1876,
  };
  const bossBattle = {
    id: 1,
    name: "Full-Length UPSC Prelims Mock",
    topic: "Simulated Exam",
    date: "Sep 20",
    reward: "Gold Badge",
  };
  const dailyQuote =
    "Success is not final, failure is not fatal: it is the courage to continue that counts. – Winston Churchill";
  const leaderboardData = [
    { rank: 1, name: "Rahul S.", points: 54321 },
    { rank: 2, name: "Priya K.", points: 48912 },
    { rank: 3, name: "You", points: 45001 },
    { rank: 4, name: "Ananya P.", points: 41022 },
    { rank: 5, name: "Vikram R.", points: 38911 },
  ];

  return (
    <main className="dashboard-main">
      {/* Header */}
      <header className="home-header">
        <div className="header-left">
          <div className="app-logo">📚</div>
          <div className="app-title">VidyaAstra</div>
        </div>

        <nav className="header-nav">
          <div className="daily-quote-nav">
            <Lightbulb size={20} />
            <p className="quote-text-nav">{dailyQuote}</p>
          </div>
        </nav>

        <div className="header-right" ref={profileRef}>
          <div className="search-bar">
            <Search size={18} />
            <input type="text" placeholder="Search resources..." />
          </div>

          <div className="notification-bell">
            🔔
            <span className="notification-badge">3</span>
          </div>

          {/* User Profile */}
          <div
            className="user-profile"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <img
              className="profile-avatar"
              src="https://via.placeholder.com/38"
              alt="Avatar"
            />
            <span>{userName}</span>
          </div>

          {/* Dropdown Menu */}
          <div className={`profile-dropdown ${dropdownOpen ? "open" : ""}`}>
            <div className="dropdown-header">
              <span>Hi, {userName}</span>
              <button
                className="close-btn"
                onClick={() => setDropdownOpen(false)}
              >
                <X size={18} />
              </button>
            </div>
            <ul>
              <li onClick={() => handleOptionClick("profile")}>Dashboard</li>
              <li onClick={() => handleOptionClick("settings")}>Settings</li>
              <li onClick={() => handleOptionClick("logout")}>Logout</li>
            </ul>
          </div>
        </div>
      </header>

      {/* Welcome Banner */}
      <section className="welcome-section">
        <h2>Welcome back, {userName}!</h2>
        <p>Ready to conquer today?</p>
        <div className="quick-action-buttons">
          <button className="quick-btn">
            <ClipboardList size={20} />
            Take Mock Test
          </button>
          <button className="quick-btn">
            <Trophy size={20} />
            Join Contest
          </button>
          <button className="quick-btn">
            <Map size={20} />
            Roadmap
          </button>
          <button className="quick-btn">
            <MessageCircle size={20} />
            Doubts
          </button>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="main-content-grid">
        {/* Upcoming Deadlines */}
        <section className="content-card deadlines-card">
          <h3>
            <Clock size={18} /> Upcoming Deadlines
          </h3>
          <div className="item-list">
            {[...personalDeadlines, ...nextOfficialExams].map(
              (deadline, index) => (
                <div key={index} className="item-card deadline-item">
                  <h4>{deadline.name}</h4>
                  <p>{deadline.daysLeft} days left</p>
                </div>
              )
            )}
          </div>
        </section>

        {/* Today's Roadmap */}
        <section className="content-card roadmap-card">
          <h3>
            <Map size={18} /> Today's Roadmap
          </h3>
          <div className="item-list">
            {todayRoadmap.map((item) => (
              <div key={item.id} className="item-card roadmap-item">
                <h4>{item.task}</h4>
                <button className="go-btn">Go</button>
              </div>
            ))}
          </div>
        </section>

        {/* Global Leaderboard */}
        <section className="content-card leaderboard-card">
          <h3>
            <Swords size={18} /> Global Leaderboard
          </h3>
          <div className="leaderboard-list">
            {leaderboardData.map((user, index) => (
              <div key={index} className="leaderboard-item">
                <span className="rank">{user.rank}.</span>
                <span className="user-name">{user.name}</span>
                <span className="points">{user.points} pts</span>
              </div>
            ))}
          </div>
        </section>

        {/* Next Contest */}
        <section className="content-card contest-card-single">
          <h3>
            <Trophy size={18} /> Next Contest
          </h3>
          <div className="contest-details">
            <h4>{nextContest.name}</h4>
            <p>
              {nextContest.date} • {nextContest.time}
            </p>
            <span>{nextContest.participants.toLocaleString()} participants</span>
            <button className="join-btn">Join Now</button>
          </div>
        </section>

        {/* Boss Battle */}
        <section className="content-card boss-battle-card">
          <h3>
            <FlaskConical size={18} /> Boss Battle
          </h3>
          <div className="boss-battle-details">
            <h4>{bossBattle.name}</h4>
            <p>Date: {bossBattle.date}</p>
            <span>Reward: {bossBattle.reward}</span>
            <button className="challenge-btn">Challenge!</button>
          </div>
        </section>
      </div>

      {/* Chatbot Button */}
      <div className="chatbot-trigger">
        <button className="chatbot-btn">
          <MessageCircle size={24} />
          Ask your AI Study Buddy
        </button>
      </div>
    </main>
  );
};

export default HomePageUpsc;