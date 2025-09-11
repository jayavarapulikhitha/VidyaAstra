import React from "react";
import "./HomeContest.css";

const HomeContest = () => (
  <div>
    <h1 className="page-title">The Colosseum</h1>

    {/* Live Contest */}
    <div className="section">
      <h2 className="section-heading">Live Now</h2>
      <div className="live-card">
        <div className="live-card-header">
          <div>
            <h3 className="live-title">Current Affairs Lightning Round</h3>
            <p className="live-details">15 Questions | 10 Minutes</p>
          </div>
          <span className="live-status">
            <span className="ping"></span>
            <span className="dot"></span>
          </span>
        </div>
        <p className="live-timer">
          Ends in: <span className="timer-value">08:45</span>
        </p>
        <button className="btn-primary">Join Immediately</button>
      </div>
    </div>

    {/* Upcoming Contests */}
    <div>
      <h2 className="section-heading">Upcoming Battles</h2>
      <div className="upcoming-list">
        <div className="upcoming-card">
          <div>
            <h3 className="contest-title">Weekly Polity Championship</h3>
            <p className="contest-details">
              Starts: Sunday, 7:00 PM | 50 Questions, 60 Mins
            </p>
          </div>
          <button className="btn-secondary">Register</button>
        </div>

        <div className="upcoming-card">
          <div>
            <h3 className="contest-title">Mega Monthly Marathon: Full GS</h3>
            <p className="contest-details">
              Starts: Sept 30, 9:00 AM | 100 Questions, 120 Mins
            </p>
          </div>
          <button className="btn-secondary">Register</button>
        </div>
      </div>
    </div>
  </div>
);

export default HomeContest;
