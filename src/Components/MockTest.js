import React, { useState } from "react";
import "./MockTest.css";

const mockTestsData = {
  "full-length": [
    { title: "Full Length GS Paper I - Mock 1", questions: 100, time: 120, participants: 12543 },
    { title: "Full Length CSAT - Mock 1", questions: 80, time: 120, participants: 9876 },
  ],
  "subject-wise": [
    { title: "Indian Polity - Fundamental Rights", questions: 50, time: 60, participants: 21098 },
    { title: "Modern History - Freedom Struggle", questions: 50, time: 60, participants: 18754 },
    { title: "Geography - Indian Monsoon", questions: 30, time: 35, participants: 15432 },
  ],
  pyq: [
    { title: "UPSC Prelims 2023 - GS Paper I", questions: 100, time: 120, participants: 35012 },
    { title: "UPSC Prelims 2022 - GS Paper I", questions: 100, time: 120, participants: 32109 },
  ],
};

const TestCard = ({ test }) => (
  <div className="test-card">
    <div className="test-card-content">
      <h3 className="test-title">{test.title}</h3>
      <div className="test-info">
        <span>📝 {test.questions} Questions</span>
        <span>⏱️ {test.time} Mins</span>
      </div>
      <p className="test-participants">👥 {test.participants.toLocaleString()} participants</p>
    </div>
    <div className="test-card-footer">
      <button className="btn-primary">Start Test</button>
    </div>
  </div>
);

const MockTest = () => {
  const [activeTab, setActiveTab] = useState("full-length");

  return (
    <div>
      <h1 className="page-title">The Proving Grounds</h1>

      <div className="tabs">
        <button
          onClick={() => setActiveTab("full-length")}
          className={`tab-button ${activeTab === "full-length" ? "active" : ""}`}
        >
          Full Length
        </button>
        <button
          onClick={() => setActiveTab("subject-wise")}
          className={`tab-button ${activeTab === "subject-wise" ? "active" : ""}`}
        >
          Subject-wise
        </button>
        <button
          onClick={() => setActiveTab("pyq")}
          className={`tab-button ${activeTab === "pyq" ? "active" : ""}`}
        >
          PYQs
        </button>
      </div>

      <div className="tests-grid">
        {mockTestsData[activeTab].map((test) => (
          <TestCard key={test.title} test={test} />
        ))}
      </div>
    </div>
  );
};

export default MockTest;
