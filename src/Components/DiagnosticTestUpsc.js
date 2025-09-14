import React, { useState, useEffect } from 'react';
import './DiagnosticTestUpsc.css';

const questions = [
  // --- EASY (6 Questions) ---
  {
    question: "Who is the head of the state in India?",
    options: ["President", "Prime Minister", "Chief Justice of India", "Vice President"],
    answer: "President",
    category: "Polity",
    difficulty: "Easy"
  },
  {
    question: "Which river is known as the 'Sorrow of Bihar'?",
    options: ["Ganges", "Kosi", "Yamuna", "Brahmaputra"],
    answer: "Kosi",
    category: "Geography",
    difficulty: "Easy"
  },
  {
    question: "If a car travels at 60 km/h, how far will it travel in 2.5 hours?",
    options: ["120 km", "150 km", "180 km", "100 km"],
    answer: "150 km",
    category: "Aptitude",
    difficulty: "Easy"
  },
  {
    question: "The Harappan civilization was discovered in which year?",
    options: ["1901", "1921", "1935", "1942"],
    answer: "1921",
    category: "History",
    difficulty: "Easy"
  },
  {
    question: "Which body is responsible for making monetary policy in India?",
    options: ["SEBI", "Ministry of Finance", "Reserve Bank of India (RBI)", "NITI Aayog"],
    answer: "Reserve Bank of India (RBI)",
    category: "Economy",
    difficulty: "Easy"
  },
  {
    question: "Who is the current President of India?",
    options: ["Ram Nath Kovind", "Pranab Mukherjee", "Droupadi Murmu", "Pratibha Patil"],
    answer: "Droupadi Murmu",
    category: "Current Affairs",
    difficulty: "Easy"
  },
  // --- MEDIUM (6 Questions) ---
  {
    question: "The 'Dandi March' led by Mahatma Gandhi was associated with:",
    options: ["Civil Disobedience Movement", "Non-Cooperation Movement", "Quit India Movement", "Khilafat Movement"],
    answer: "Civil Disobedience Movement",
    category: "History",
    difficulty: "Medium"
  },
  {
    question: "What does 'Repo Rate' signify?",
    options: [
      "The rate at which commercial banks borrow from RBI",
      "The rate at which RBI borrows from commercial banks",
      "The rate of interest on fixed deposits",
      "The rate of inflation"
    ],
    answer: "The rate at which commercial banks borrow from RBI",
    category: "Economy",
    difficulty: "Medium"
  },
  {
    question: "Which constitutional amendment is known as the 'Mini-Constitution'?",
    options: ["42nd Amendment", "44th Amendment", "73rd Amendment", "24th Amendment"],
    answer: "42nd Amendment",
    category: "Polity",
    difficulty: "Medium"
  },
  {
    question: "The 'Western Ghats' are an example of which type of mountain?",
    options: ["Block Mountains", "Fold Mountains", "Volcanic Mountains", "Residual Mountains"],
    answer: "Block Mountains",
    category: "Geography",
    difficulty: "Medium"
  },
  {
    question: "Which country recently became the newest member of the NATO alliance?",
    options: ["Sweden", "Ukraine", "Finland", "Switzerland"],
    answer: "Sweden",
    category: "Current Affairs",
    difficulty: "Medium"
  },
  {
    question: "A man's age is 125% of what it was 10 years ago, but 83 1/3% of what it will be after 10 years. What is his present age?",
    options: ["45 years", "50 years", "55 years", "60 years"],
    answer: "50 years",
    category: "Aptitude",
    difficulty: "Medium"
  },
  // --- HARD (3 Questions) ---
  {
    question: "What is the 'Fiscal Deficit'?",
    options: [
      "Total expenditure minus total receipts excluding borrowings",
      "Total revenue minus total expenditure",
      "The difference between exports and imports",
      "The government's total debt"
    ],
    answer: "Total expenditure minus total receipts excluding borrowings",
    category: "Economy",
    difficulty: "Hard"
  },
  {
    question: "What is the primary objective of the 'SAMPRITI' joint military exercise?",
    options: [
      "Counter-terrorism operations between India and Bangladesh",
      "Naval exercises with Sri Lanka",
      "Air combat drills with France",
      "Cybersecurity cooperation with the USA"
    ],
    answer: "Counter-terrorism operations between India and Bangladesh",
    category: "Current Affairs",
    difficulty: "Hard"
  },
  {
    question: "The power of the Supreme Court of India to decide disputes between the Centre and the States falls under its:",
    options: ["Original Jurisdiction", "Advisory Jurisdiction", "Appellate Jurisdiction", "Writ Jurisdiction"],
    answer: "Original Jurisdiction",
    category: "Polity",
    difficulty: "Hard"
  }
];

const DiagnosticTestUpsc = ({ onFinishTest }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(new Array(questions.length).fill(null));

  useEffect(() => {
    setUserAnswers(new Array(questions.length).fill(null));
  }, []);

  const selectAnswer = (index, answer) => {
    const newAnswers = [...userAnswers];
    newAnswers[index] = answer;
    setUserAnswers(newAnswers);

    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
    }, 300);
  };

  const calculateResults = () => {
    let score = 0;
    questions.forEach((q, i) => {
      if (userAnswers[i] === q.answer) score++;
    });

    const percentage = Math.round((score / questions.length) * 100);

    // Call the callback from App.js
    if (onFinishTest) onFinishTest(userAnswers, percentage);
  };

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  const q = questions[currentQuestionIndex];

  return (
    <div className="test-screen card">
      <div className="test-header">
        <h2 className="stage-title">Diagnostic Test</h2>
        <div className="question-counter">
          {currentQuestionIndex + 1} / {questions.length}
        </div>
      </div>

      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>

      <div className="question-container">
        <div className="question-meta">
          <p className="question-category">{q.category} - {q.difficulty}</p>
          <p className="question-text">{q.question}</p>
        </div>
        
        <div className="options-container">
          {q.options.map((option, i) => (
            <label 
              key={i} 
              className={`roadmap-checkbox ${userAnswers[currentQuestionIndex] === option ? 'selected' : ''}`}
            >
              <input 
                type="radio" 
                name={`question-${currentQuestionIndex}`}
                value={option}
                onChange={() => selectAnswer(currentQuestionIndex, option)}
                checked={userAnswers[currentQuestionIndex] === option}
                className="checkbox"
              />
              <span className="checkbox-label">{option}</span>
            </label>
          ))}
        </div>
      </div>

      {currentQuestionIndex === questions.length - 1 && (
        <div className="test-footer">
          <button className="submit-button" onClick={calculateResults}>
            Finish & See Results
          </button>
        </div>
      )}
    </div>
  );
};

export default DiagnosticTestUpsc;
