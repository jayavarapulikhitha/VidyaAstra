import React from 'react';
import './HomeDoubts.css'; // Importing CSS

const HomeDoubts = () => (
    <div>
        <h1 className="text-3xl font-bold text-cyan-300 mb-2">The Scholars' Guild</h1>
        <p className="text-slate-400 mb-6">Ask, Answer, and Master. Earn coins for helpful answers.</p>
        <div className="flex flex-col md:flex-row gap-4 mb-6">
            <input type="text" placeholder="Search for a doubt..." className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500" />
            <button className="btn-primary w-full md:w-auto px-6 py-2 rounded-lg font-semibold whitespace-nowrap"><i className="fas fa-question-circle mr-2"></i>Ask a New Doubt</button>
        </div>
        <div className="space-y-4">
            <div className="card p-5 rounded-lg">
                <p className="text-slate-300">What is the difference between a parliamentary and presidential form of government, especially in the context of India's quasi-federal structure?</p>
                <div className="flex items-center justify-between mt-4 text-sm">
                    <div className="flex items-center space-x-4 text-slate-400">
                        <span className="bg-cyan-900/50 text-cyan-300 px-2 py-1 rounded">#Polity</span>
                        <span><i className="fas fa-comment-alt mr-1"></i> 5 Answers</span>
                    </div>
                    <button className="text-cyan-400 hover:text-cyan-300 font-semibold">View Discussion</button>
                </div>
            </div>
            <div className="card p-5 rounded-lg">
                <p className="text-slate-300">Can someone explain the impact of the El Niño phenomenon on the Indian monsoon system with a recent example?</p>
                <div className="flex items-center justify-between mt-4 text-sm">
                    <div className="flex items-center space-x-4 text-slate-400">
                        <span className="bg-cyan-900/50 text-cyan-300 px-2 py-1 rounded">#Geography</span>
                        <span><i className="fas fa-comment-alt mr-1"></i> 2 Answers</span>
                        <span className="text-green-400 font-bold"><i className="fas fa-check-circle mr-1"></i> Verified Answer</span>
                    </div>
                    <button className="text-cyan-400 hover:text-cyan-300 font-semibold">View Discussion</button>
                </div>
            </div>
        </div>
    </div>
);

export default HomeDoubts;
