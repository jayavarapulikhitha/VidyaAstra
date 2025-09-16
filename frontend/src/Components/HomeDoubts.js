import React from 'react';
import './HomeDoubts.css';

const doubts = [
  {
    id: 1,
    user: 'Aarav',
    rank: 'Master Scholar',
    avatar: 'https://i.pravatar.cc/40?img=3',
    question: "What is the difference between a parliamentary and presidential form of government, especially in the context of India's quasi-federal structure?",
    tag: '#Polity',
    answers: 5,
    xp: 25,
    hot: true
  },
  {
    id: 2,
    user: 'Priya',
    rank: 'Novice Scholar',
    avatar: 'https://i.pravatar.cc/40?img=5',
    question: "Can someone explain the impact of the El Niño phenomenon on the Indian monsoon system with a recent example?",
    tag: '#Geography',
    answers: 2,
    xp: 50,
    verified: true
  }
];

const HomeDoubts = () => (
  <div className="guild-container">
    <h1 className="page-title">🎓 The Scholars' Guild</h1>
    <p className="subtitle">
      Ask, Answer, and Master. Earn <span className="highlight">coins</span> for helpful answers & climb the leaderboard!
    </p>

    {/* Search & Ask */}
    <div className="action-row">
      <input type="text" placeholder="🔍 Search for a doubt..." className="search-input" />
      <button className="ask-button">
        <i className="fas fa-question-circle mr-2"></i> Ask a New Doubt
      </button>
    </div>

    {/* Doubts List */}
    <div className="doubts-list">
      {doubts.map((doubt) => (
        <div className={`doubt-card ${doubt.hot ? 'hot-card' : ''}`} key={doubt.id}>
          <div className="user-info">
            <img src={doubt.avatar} alt="avatar" className="avatar" />
            <div>
              <p className="username">{doubt.user}</p>
              <p className="rank">{doubt.rank}</p>
            </div>
          </div>

          <div className="question-section">
            <p className="question-text">{doubt.question}</p>
            <div className="tags">
              <span className="tag">{doubt.tag}</span>
              <span><i className="fas fa-comment-alt mr-1"></i> {doubt.answers} Answers</span>
              {doubt.verified && <span className="verified"><i className="fas fa-check-circle mr-1"></i> Verified</span>}
              <span className="coins-badge">+{doubt.xp} XP</span>
            </div>
          </div>

          <div className="actions">
            <button className="vote-btn upvote"><i className="fas fa-arrow-up"></i></button>
            <button className="vote-btn downvote"><i className="fas fa-arrow-down"></i></button>
            <button className="view-btn">View Discussion</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default HomeDoubts;
