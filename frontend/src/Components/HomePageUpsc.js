// src/Components/HomePageUpsc.js
import React, { useState, useEffect, useRef } from "react";
import {
  Trophy,
  Zap,
  BookOpen,
  Award,
  Star,
  Play,
  MessageCircle,
  Calendar,
  Search,
  GraduationCap,
  Newspaper,
  Lightbulb,
  X
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./HomePageUpsc.css";

const HomePageUpsc = () => {
  const [currentEnergy] = useState(85);
  const [currentStreak] = useState(7);
  const [totalCoins] = useState(1250);
  const [currentLevel] = useState(12);
  const [userName] = useState("Arjun");
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

 // CHANGE THIS FUNCTION:
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
  const upcomingContests = [
    { id: 1, name: "Weekly History Battle", date: "Tomorrow", time: "6:00 PM", participants: 2341 },
    { id: 2, name: "Current Affairs Lightning", date: "Sep 7", time: "8:00 PM", participants: 1876 },
    { id: 3, name: "Monthly Mega Quiz", date: "Sep 15", time: "7:00 PM", participants: 5234 },
  ];
  const nextExams = [
    { name: "UPSC Prelims 2026", date: "May 25, 2026", daysLeft: 263 },
    { name: "UPSC Mains 2026", date: "Sep 20, 2026", daysLeft: 381 },
  ];
  const articles = [
    { id: 1, title: "India’s Freedom Struggle – Key Events", author: "Prof. Sharma", readTime: "5 min read" },
    { id: 2, title: "Latest Current Affairs (Sep 2025)", author: "Editorial Team", readTime: "7 min read" },
    { id: 3, title: "Polity Basics – Understanding Fundamental Rights", author: "Dr. Mehta", readTime: "6 min read" },
  ];
  const classes = [
    { id: 1, topic: "Economy Crash Course", date: "Sep 9, 2025", time: "6:30 PM", mentor: "Dr. Nair" },
    { id: 2, topic: "Essay Writing Practice", date: "Sep 12, 2025", time: "7:00 PM", mentor: "Prof. Iyer" },
    { id: 3, topic: "Environment & Ecology", date: "Sep 15, 2025", time: "5:00 PM", mentor: "Ms. Ritu" },
  ];
  const dailyTip = "Consistency beats intensity – 2 focused hours every day is better than 12 hours once a week.";

  return (
    <main className="dashboard-main">
      {/* Header */}
      <header className="home-header">
        <div className="header-left">
          <div className="app-logo">📚</div>
          <div className="app-title">VidyaAstra</div>
        </div>

        <nav className="header-nav">
          <a href="/" className="nav-item">Home</a>
          <a href="/contests" className="nav-item">Contests</a>
          <a href="/exams" className="nav-item">Exams</a>
          <a href="/articles" className="nav-item">Articles</a>
          <a href="/classes" className="nav-item">Classes</a>
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
          <div className="user-profile" onClick={() => setDropdownOpen(!dropdownOpen)}>
            <img className="profile-avatar" src="https://via.placeholder.com/38" alt="Avatar"/>
            <span>{userName}</span>
          </div>

          {/* Dropdown Menu */}
          <div className={`profile-dropdown ${dropdownOpen ? "open" : ""}`}>
            <div className="dropdown-header">
              <span>Hi, {userName}</span>
              <button className="close-btn" onClick={() => setDropdownOpen(false)}>
                <X size={18}/>
              </button>
            </div>
            <ul>
              <li onClick={() => handleOptionClick("/DashboardUpsc")}>Profile</li>
              <li onClick={() => handleOptionClick("settings")}>Settings</li>
              <li onClick={() => handleOptionClick("logout")}>Logout</li>
            </ul>
          </div>
        </div>
      </header>

      {/* Welcome Section */}
      <section className="welcome-section">
        <h2>Welcome back, {userName}! 🚀</h2>
        <p>Ready to conquer today?</p>
        <div className="quick-action-buttons">
          <button className="quick-btn primary">
            <Play size={16}/> Start Daily Quiz
          </button>
          <button className="quick-btn secondary">
            <BookOpen size={16}/> Continue Study
          </button>
        </div>
      </section>

      {/* Daily Tip */}
      <section className="content-card tip-card">
        <Lightbulb size={20}/> <strong>Daily Tip:</strong> {dailyTip}
      </section>

      {/* Stats Dashboard */}
      <section className="stats-dashboard">
        <div className="stat-card energy-card">
          <h3>Energy</h3>
          <div className="energy-bar">
            <div className="energy-fill" style={{ width: `${currentEnergy}%` }}></div>
          </div>
          <p>{currentEnergy}/100</p>
        </div>
        <div className="stat-card streak-card">
          <h3>Streak</h3>
          <p>{currentStreak} days</p>
        </div>
        <div className="stat-card coins-card">
          <h3>Coins</h3>
          <p>{totalCoins.toLocaleString()}</p>
        </div>
        <div className="stat-card level-card">
          <h3>Level</h3>
          <p>{currentLevel}</p>
        </div>
      </section>

      {/* Articles Section */}
      <section className="content-card articles-card">
        <h3><Newspaper size={18}/> Featured Articles</h3>
        <div className="grid-layout">
          {articles.map(article => (
            <div key={article.id} className="item-card">
              <h4>{article.title}</h4>
              <p>By {article.author}</p>
              <span>{article.readTime}</span>
              <button className="read-btn">Read</button>
            </div>
          ))}
        </div>
      </section>

      {/* Classes Section */}
      <section className="content-card classes-card">
        <h3><GraduationCap size={18}/> Upcoming Classes</h3>
        <div className="grid-layout">
          {classes.map(cls => (
            <div key={cls.id} className="item-card">
              <h4>{cls.topic}</h4>
              <p>{cls.date} • {cls.time}</p>
              <span>Mentor: {cls.mentor}</span>
              <button className="join-class-btn">Join</button>
            </div>
          ))}
        </div>
      </section>

      {/* Contests Section */}
      <section className="content-card contests-card">
        <h3>Upcoming Contests</h3>
        <div className="grid-layout">
          {upcomingContests.map(contest => (
            <div key={contest.id} className="item-card">
              <h4>{contest.name}</h4>
              <p>{contest.date} • {contest.time}</p>
              <span>{contest.participants.toLocaleString()} participants</span>
              <button className="join-contest-btn">Join</button>
            </div>
          ))}
        </div>
      </section>

      {/* Exam Deadlines Section */}
      <section className="content-card deadlines-card">
        <h3>Exam Deadlines</h3>
        <div className="grid-layout">
          {nextExams.map((exam, index) => (
            <div key={index} className="item-card">
              <h4>{exam.name}</h4>
              <p>{exam.date}</p>
              <span>{exam.daysLeft} days left</span>
            </div>
          ))}
        </div>
      </section>

      {/* Chatbot Button */}
      <div className="chatbot-trigger">
        <button className="chatbot-btn">
          <MessageCircle size={24}/>
          Ask your AI Study Buddy
        </button>
      </div>
    </main>
  );
};

export default HomePageUpsc;
