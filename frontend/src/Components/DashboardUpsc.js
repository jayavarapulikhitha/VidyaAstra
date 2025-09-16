// src/Components/DashboardUpsc.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Link } from "react-router-dom";  // <- Added for routing
import {
  Zap,
  Star,
  Trophy,
  DollarSign,
  Map,
  ClipboardList,
  MessageCircle,
  Award,
  CircleCheck,
  Clock,
  Swords,
  Settings,
  User,
  Home
} from "lucide-react";
// // import ".D:/VidyaAstra/frontend/src/Components/DashboardUpsc.css";
 import "./DashboardUpsc.css";

const DashboardUpsc = () => {
  const [userName] = useState("Arjun");
  const [currentEnergy] = useState(75);
  const [currentStreak] = useState(5);
  const [totalCoins] = useState(1500);
  const [currentLevel] = useState(12);
  const [calendarDate, setCalendarDate] = useState(new Date());

  const streakDates = [
    new Date("2025-09-08"),
    new Date("2025-09-09"),
    new Date("2025-09-10"),
  ];

  const dailyQuests = [
    { id: 1, name: "Revise Chapter 5: Indian Polity", progress: 80, isComplete: false },
    { id: 2, name: "Complete Daily Current Affairs Quiz", progress: 0, isComplete: false },
    { id: 3, name: "Solve 15 Ancient History MCQs", progress: 100, isComplete: true },
  ];

  const userBadges = [
    { id: 1, name: "History Hero", description: "Completed 10 history quests", icon: <Trophy size={40} color="#FFD700" />, progressToNext: 50 },
    { id: 2, name: "Polity Pro", description: "Mastered Polity basics", icon: <Award size={40} color="#00FFD1" />, progressToNext: 80 },
    { id: 3, name: "Daily Doyen", description: "Achieved a 7-day streak", icon: <Zap size={40} color="#FF6B6B" />, progressToNext: 100 },
  ];

  const dailyMission = { task: "Answer 3 doubts in the community to earn 100 coins!", reward: "100" };

  const upcomingExams = [
    { name: "UPSC Prelims 2026", daysLeft: 263 },
    { name: "UPSC Mains 2026", daysLeft: 381 },
  ];

  const subjectProgress = [
    { subject: "History", completion: 60 },
    { subject: "Polity", completion: 45 },
    { subject: "Economy", completion: 30 },
  ];

  const lastTestAnalytics = { score: 78, weakSubjects: ["Economy", "Polity"] };

  const nextContest = { name: "Weekly Mock Test", daysLeft: 2 };

  const bossBattle = { task: "Score 80+ in next Mock Test", reward: "500 Coins" };

  const personalGoals = [
    { task: "Finish GS1", completion: 20 },
    { task: "Finish Polity", completion: 50 },
  ];

  return (
    <div className="dashboard-container">
      {/* Left Sidebar */}
      <motion.aside
        className="dashboard-sidebar-left"
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="sidebar-header">
          <div className="app-logo">📚</div>
          <div className="app-title">VidyaAstra</div>
        </div>
        <nav className="sidebar-nav">
          <Link to="/" className="nav-item-dashboard"><Home size={20} /> Home</Link>
          <Link to="/dashboard" className="nav-item-dashboard active"><User size={20} /> Dashboard</Link>
          <Link to="/roadmap" className="nav-item-dashboard"><Map size={20} /> Study Roadmap</Link>
          <Link to="/tests" className="nav-item-dashboard"><ClipboardList size={20} /> Mock Tests</Link>
          <Link to="/contests" className="nav-item-dashboard"><Trophy size={20} /> Contests</Link>
          <Link to="/doubts" className="nav-item-dashboard"><MessageCircle size={20} /> Doubt Exchange</Link>
          <Link to="/leaderboard" className="nav-item-dashboard"><Swords size={20} /> Leaderboard</Link> {/* Updated */}
          <Link to="/settings" className="nav-item-dashboard"><Settings size={20} /> Settings</Link>
        </nav>
      </motion.aside>

      {/* Main Content */}
      <main className="dashboard-main-content">
        <motion.header
          className="main-content-header"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Welcome back, {userName}! 🚀</h1>
          <p>Time to conquer your daily quests.</p>
        </motion.header>

        {/* Stats */}
        <section className="stats-dashboard">
          <motion.div className="stat-card energy-card" whileHover={{ scale: 1.05 }}>
            <Zap size={24} /><h3>Energy</h3>
            <div className="energy-bar"><div className="energy-fill" style={{ width: `${currentEnergy}%` }}></div></div>
            <p>{currentEnergy}/100</p>
          </motion.div>
          <motion.div className="stat-card streak-card" whileHover={{ scale: 1.05 }}>
            <Star size={24} /><h3>Streak</h3><p>{currentStreak} days</p>
          </motion.div>
          <motion.div className="stat-card coins-card" whileHover={{ scale: 1.05 }}>
            <DollarSign size={24} /><h3>Coins</h3><p>{totalCoins.toLocaleString()}</p>
          </motion.div>
          <motion.div className="stat-card level-card" whileHover={{ scale: 1.05 }}>
            <Trophy size={24} /><h3>Level</h3><p>{currentLevel}</p>
          </motion.div>
        </section>

        {/* Daily Quests */}
        <motion.section className="content-card roadmap-card" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <h2><Map size={20} /> Today's Quests</h2>
          <div className="quest-list">
            {dailyQuests.map(quest => (
              <div key={quest.id} className="quest-item">
                <div className="quest-details">
                  <h4>{quest.name}</h4>
                  <div className="quest-progress-bar">
                    <div className="quest-progress-fill" style={{ width: `${quest.progress}%` }}></div>
                  </div>
                </div>
                {quest.isComplete ? <CircleCheck size={24} color="#00FFD1" /> : <button className="quest-btn">Start</button>}
              </div>
            ))}
          </div>
        </motion.section>

        {/* Subject-wise Progress */}
        <motion.section className="content-card subject-progress-card" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2>Study Progress</h2>
          {subjectProgress.map((sub, idx) => (
            <div key={idx} className="subject-progress-item">
              <h4>{sub.subject}</h4>
              <div className="quest-progress-bar">
                <div className="quest-progress-fill" style={{ width: `${sub.completion}%` }}></div>
              </div>
              <p>{sub.completion}% complete</p>
            </div>
          ))}
        </motion.section>

        {/* Last Test Analytics */}
        <motion.section className="content-card test-analytics-card" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
          <h2>Last Test Analytics</h2>
          <p>Score: {lastTestAnalytics.score}%</p>
          <p>Weak Subjects: {lastTestAnalytics.weakSubjects.join(", ")}</p>
        </motion.section>

        {/* Boss Battle */}
        <motion.section className="content-card boss-battle-card" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <h2>Boss Battle</h2>
          <p>{bossBattle.task}</p>
          <p>Reward: {bossBattle.reward}</p>
        </motion.section>

        {/* Achievements */}
        <motion.section className="content-card achievements-card" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1 }}>
          <h2><Award size={20} /> Achievements</h2>
          <div className="badges-grid">
            {userBadges.map(badge => (
              <div key={badge.id} className="badge-item">
                <div className="badge-icon">{badge.icon}</div>
                <div className="badge-info">
                  <h4>{badge.name}</h4>
                  <p>{badge.description}</p>
                  <p>Progress to next: {badge.progressToNext}%</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Personal Goals */}
        <motion.section className="content-card personal-goals-card" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}>
          <h2>Personal Goals</h2>
          {personalGoals.map((goal, idx) => (
            <div key={idx} className="goal-item">
              <h4>{goal.task}</h4>
              <div className="quest-progress-bar">
                <div className="quest-progress-fill" style={{ width: `${goal.completion}%` }}></div>
              </div>
              <p>{goal.completion}% completed</p>
            </div>
          ))}
        </motion.section>
      </main>

      {/* Right Sidebar */}
      <motion.aside className="dashboard-sidebar-right" initial={{ x: 80, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
        {/* Calendar */}
        <div className="sidebar-card calendar-card">
          <Calendar
            onChange={setCalendarDate}
            value={calendarDate}
            tileContent={({ date, view }) =>
              view === "month" && streakDates.some(d => d.toDateString() === date.toDateString())
                ? <span style={{ fontSize: "1.2rem" }}>🔥</span>
                : null
            }
          />
        </div>

        {/* Upcoming UPSC Exams */}
        <div className="sidebar-card deadline-card">
          <h3><Clock size={20} /> Upcoming UPSC Exams</h3>
          {upcomingExams.map((exam, index) => (
            <div key={index} className="exam-countdown">
              <h4>{exam.name}</h4>
              <p className="countdown-days">{exam.daysLeft} <span>days left</span></p>
            </div>
          ))}
        </div>

        {/* Next Contest */}
        <div className="sidebar-card contest-card">
          <h3>Next Contest</h3>
          <h4>{nextContest.name}</h4>
          <p>{nextContest.daysLeft} days left</p>
        </div>

        {/* Daily Mission */}
        <div className="sidebar-card mission-card">
          <h3>Daily Mission</h3>
          <p>{dailyMission.task}</p>
          <div className="mission-reward"><DollarSign size={20} color="#FFD700" /> +{dailyMission.reward}</div>
        </div>

        {/* AI Buddy */}
        <div className="sidebar-card ai-buddy-card">
          <h3><MessageCircle size={20} /> AI Study Buddy</h3>
          <p>
            Hi, {userName}! You've got this. Your current affairs revision is looking good. Keep up the streak!
          </p>
        </div>
      </motion.aside>
    </div>
  );
};

export default DashboardUpsc;
