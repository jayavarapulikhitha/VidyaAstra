import React, { useState } from "react";
import {
  Trophy,
  Target,
  Zap,
  Calendar,
  BookOpen,
  Award,
  Star,
  Play,
  MessageCircle,
  TrendingUp,
} from "lucide-react";

// The CSS is now included here in a string to prevent file-related errors.
const dashboardStyles = `
/* ===== General Layout ===== */
body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    background: linear-gradient(135deg, #0F0C29 0%, #302B63 100%);
    color: #E0FBFC;
    overflow-x: hidden;
}

.dashboard-main {
    padding: 25px;
}

/* ===== Welcome Section ===== */
.welcome-section {
    padding: 30px;
    background: rgba(48, 43, 99, 0.6);
    margin: 25px;
    border-radius: 25px;
    box-shadow: 0 8px 30px rgba(0,0,0,0.4);
    text-align: center;
    position: relative;
    overflow: hidden;
    animation: fadeIn 1s ease-out forwards;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.welcome-section h2 {
    margin: 0;
    font-size: 32px;
    font-weight: 700;
    background: linear-gradient(90deg, #FFD700, #00FFD1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 10px #FFD700, 0 0 25px #00FFD1;
}

.welcome-section p {
    margin: 10px 0 0;
    font-size: 16px;
    color: #E0FBFC;
    text-shadow: 0 0 5px #00FFD1;
}

/* ===== Quick Action Buttons ===== */
.quick-action-buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
}

.quick-btn {
    padding: 16px 28px;
    border-radius: 35px;
    font-weight: 700;
    font-size: 18px;
    border: none;
    cursor: pointer;
    text-shadow: 0 0 3px rgba(0,0,0,0.5);
    position: relative;
    overflow: hidden;
    transition: all 0.4s ease;
}

.quick-btn.primary {
    background: linear-gradient(90deg, #FF6B6B, #FFD700);
    background-size: 200% 200%;
    animation: gradientMove 3s ease infinite;
    color: #0F0C29;
}

.quick-btn.secondary {
    background: linear-gradient(90deg, #00FFD1, #4C6EF5);
    background-size: 200% 200%;
    animation: gradientMove 3s ease infinite;
    color: #0F0C29;
}

.quick-btn:hover {
    transform: translateY(-5px) scale(1.1);
    box-shadow: 0 0 25px rgba(255,255,255,0.6), 0 0 40px rgba(255,255,255,0.3);
    filter: brightness(1.3);
}

/* ===== Stats Dashboard ===== */
.stats-dashboard {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 25px;
    padding: 20px;
}

.stat-card {
    background: rgba(48, 43, 99, 0.6);
    padding: 25px;
    border-radius: 25px;
    text-align: center;
    box-shadow: 0 8px 30px rgba(0,0,0,0.5);
    transition: transform 0.4s, box-shadow 0.4s;
    position: relative;
    overflow: hidden;
    color: #E0FBFC;
}

.stat-card:hover {
    transform: translateY(-8px) scale(1.05);
    box-shadow: 0 12px 35px rgba(0,255,209,0.3);
}

.stat-header {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    margin-bottom: 10px;
    font-weight: bold;
}

/* Energy Bar */
.energy-bar {
    height: 12px;
    background: rgba(255,255,255,0.1);
    border-radius: 6px;
    margin: 12px 0 0;
    overflow: hidden;
}

.energy-fill {
    height: 100%;
    background: linear-gradient(90deg, #FFD700, #FF6B6B);
    border-radius: 6px;
    transition: width 0.5s ease-in-out;
}

/* ===== Contests & Deadlines ===== */
.content-card {
    background: rgba(48, 43, 99, 0.6);
    padding: 25px;
    margin: 25px;
    border-radius: 25px;
    box-shadow: 0 8px 30px rgba(0,0,0,0.5);
    transition: transform 0.4s, box-shadow 0.4s;
    position: relative;
}

.content-card:hover {
    transform: translateY(-5px) scale(1.03);
    box-shadow: 0 12px 40px rgba(255,255,255,0.2);
}

.card-header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 12px;
    font-weight: bold;
}

.contests-list,
.deadlines-list {
    display: grid;
    gap: 15px;
}

.contest-item,
.deadline-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid rgba(255,255,255,0.15);
}

.contest-info h4, .deadline-item h4 {
    margin: 0;
}

.join-contest-btn {
    background: linear-gradient(90deg, #FFD700, #FF6B6B);
    color: #0F0C29;
    border: none;
    padding: 10px 18px;
    border-radius: 20px;
    cursor: pointer;
    font-weight: 700;
    transition: all 0.3s;
}

/* Chatbot */
.chatbot-trigger {
    position: fixed;
    bottom: 25px;
    right: 25px;
    z-index: 50;
}

.chatbot-btn {
    background: linear-gradient(90deg, #6f42c1, #4c6ef5);
    color: white;
    border: none;
    padding: 16px 24px;
    border-radius: 50px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 12px;
    font-weight: 700;
    box-shadow: 0 5px 35px rgba(255,255,255,0.3);
    transition: all 0.3s;
}

.chatbot-btn:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 10px 40px rgba(255,255,255,0.5);
}

/* ===== Responsive ===== */
@media (max-width: 768px) {
    .stats-dashboard {
        grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    }

    .welcome-section, .content-card, .tip-card {
        margin: 15px;
        padding: 15px;
    }

    .quick-action-buttons {
        flex-direction: column;
    }

    .contest-item, .deadline-item {
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
    }
}
`;

const DashboardUpsc = () => {
  const [currentEnergy] = useState(85);
  const [currentStreak] = useState(7);
  const [totalCoins] = useState(1250);
  const [currentLevel] = useState(12);
  const [userName] = useState("Arjun");

  const upcomingContests = [
    { id: 1, name: "Weekly History Battle", date: "Tomorrow", time: "6:00 PM", participants: 2341 },
    { id: 2, name: "Current Affairs Lightning", date: "Sep 7", time: "8:00 PM", participants: 1876 },
    { id: 3, name: "Monthly Mega Quiz", date: "Sep 15", time: "7:00 PM", participants: 5234 },
  ];

  const nextExams = [
    { name: "UPSC Prelims 2026", date: "May 25, 2026", daysLeft: 263 },
    { name: "UPSC Mains 2026", date: "Sep 20, 2026", daysLeft: 381 },
  ];

  return (
    <>
      <style>{dashboardStyles}</style>
      <main className="dashboard-main">
        {/* Welcome Section */}
        <section className="welcome-section">
          <div className="welcome-text">
            <h2>Welcome back, {userName}! 🚀</h2>
            <p>Ready to conquer today?</p>
          </div>
          <div className="quick-action-buttons">
            <button className="quick-btn primary">
              <Play size={16} />
              Start Daily Quiz
            </button>
            <button className="quick-btn secondary">
              <BookOpen size={16} />
              Continue Study
            </button>
          </div>
        </section>

        {/* Stats Dashboard */}
        <section className="stats-dashboard">
          <div className="stat-card energy-card">
            <div className="stat-header">
              <Zap className="stat-icon energy" />
              <span className="stat-label">Energy</span>
            </div>
            <div className="energy-bar">
              <div className="energy-fill" style={{ width: `${currentEnergy}%` }}></div>
            </div>
            <span className="stat-value">{currentEnergy}/100</span>
          </div>

          <div className="stat-card streak-card">
            <div className="stat-header">
              <Award className="stat-icon streak" />
              <span className="stat-label">Streak</span>
            </div>
            <div className="streak-display">
              <span className="streak-number">{currentStreak}</span>
              <span className="streak-unit">days</span>
          </div>
          </div>

          <div className="stat-card coins-card">
            <div className="stat-header">
              <Star className="stat-icon coins" />
              <span className="stat-label">Coins</span>
            </div>
            <span className="stat-value">{totalCoins.toLocaleString()}</span>
          </div>

          <div className="stat-card level-card">
            <div className="stat-header">
              <Trophy className="stat-icon level" />
              <span className="stat-label">Level</span>
            </div>
            <span className="stat-value">{currentLevel}</span>
          </div>
        </section>

        {/* Contests */}
        <section className="content-card contests-card">
          <div className="card-header">
            <Trophy className="card-icon" />
            <h3>Upcoming Contests</h3>
          </div>
          <div className="contests-list">
            {upcomingContests.map((contest) => (
              <div key={contest.id} className="contest-item">
                <div className="contest-info">
                  <h4>{contest.name}</h4>
                  <span>{contest.date} • {contest.time}</span>
              </div>
                <button className="join-contest-btn">Join</button>
              </div>
            ))}
          </div>
        </section>

        {/* Exam Deadlines */}
        <section className="content-card deadlines-card">
          <div className="card-header">
            <Calendar className="card-icon" />
            <h3>Exam Deadlines</h3>
          </div>
          <div className="deadlines-list">
            {nextExams.map((exam, index) => (
              <div key={index} className="deadline-item">
                <h4>{exam.name}</h4>
                <p>{exam.date}</p>
                <span>{exam.daysLeft} days left</span>
              </div>
            ))}
          </div>
        </section>

        {/* Chatbot Trigger */}
        <div className="chatbot-trigger">
          <button className="chatbot-btn">
            <MessageCircle size={24} />
            <span>Ask your AI Study Buddy</span>
          </button>
        </div>
      </main>
    </>
  );
};

export default DashboardUpsc;