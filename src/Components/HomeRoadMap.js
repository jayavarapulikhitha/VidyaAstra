import React from 'react';
import './HomeRoadMap.css'; // Importing CSS

const HomeRoadMap = () => (
    <div>
        <h1 className="page-title">The Aspirant's Atlas</h1>
        <div className="space-y-6">
            <div className="card">
                <h2 className="stage-title">Stage 1: Prelims Conquest</h2>
                <div className="space-y-3">
                    <label className="roadmap-checkbox">
                        <input type="checkbox" className="checkbox" />
                        <span className="checkbox-label">Complete all NCERTs (Class 6-12)</span>
                    </label>
                    <label className="roadmap-checkbox">
                        <input type="checkbox" className="checkbox" defaultChecked />
                        <span className="checkbox-label">Finish Indian Polity by M. Laxmikanth</span>
                    </label>
                    <label className="roadmap-checkbox">
                        <input type="checkbox" className="checkbox" />
                        <span className="checkbox-label">Master Modern Indian History</span>
                    </label>
                </div>
                <div className="resources">
                    <h3 className="resources-title">Resources:</h3>
                    <a href="#" className="resource-link">
                        Recommended Booklist <i className="fas fa-external-link-alt ml-1"></i>
                    </a>
                </div>
            </div>

            <div className="card">
                <h2 className="stage-title">Stage 2: Mains Marathon</h2>
                <div className="space-y-3">
                    <label className="roadmap-checkbox">
                        <input type="checkbox" className="checkbox" />
                        <span className="checkbox-label">Practice Daily Answer Writing (2 Questions)</span>
                    </label>
                    <label className="roadmap-checkbox">
                        <input type="checkbox" className="checkbox" />
                        <span className="checkbox-label">Complete Optional Subject Paper 1</span>
                    </label>
                </div>
            </div>
        </div>
    </div>
);

export default HomeRoadMap;
