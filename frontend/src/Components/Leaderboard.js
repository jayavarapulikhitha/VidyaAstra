import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { UserCircle2, Crown, Swords } from 'lucide-react';
import Sidebar from './Sidebar'; // Import the shared sidebar component
import './Leaderboard.css'; // The new, unified CSS file

const Leaderboard = () => {
  const [players, setPlayers] = useState([
    { id: 1, name: 'Arjun', points: 1500, avatar: 'https://i.pravatar.cc/150?u=a' },
    { id: 2, name: 'Lavanya', points: 1350, avatar: 'https://i.pravatar.cc/150?u=b' },
    { id: 3, name: 'Rohan', points: 1200, avatar: 'https://i.pravatar.cc/150?u=c' },
    { id: 4, name: 'Priya', points: 1100, avatar: 'https://i.pravatar.cc/150?u=d' },
    { id: 5, name: 'Karthik', points: 950, avatar: 'https://i.pravatar.cc/150?u=e' },
    { id: 6, name: 'Anjali', points: 880, avatar: 'https://i.pravatar.cc/150?u=f' },
    { id: 7, name: 'Vikram', points: 720, avatar: 'https://i.pravatar.cc/150?u=g' },
    { id: 8, name: 'Shruti', points: 650, avatar: 'https://i.pravatar.cc/150?u=h' },
    { id: 9, name: 'Tejaswini', points: 990, avatar: 'https://i.pravatar.cc/150?u=i' },
    { id: 10, name: 'Rahul', points: 500, avatar: 'https://i.pravatar.cc/150?u=j' },
  ]);

  const currentUser = { id: 9, name: 'Tejaswini', points: 990, avatar: 'https://i.pravatar.cc/150?u=i' };

  useEffect(() => {
    setPlayers(prev => [...prev].sort((a, b) => b.points - a.points));
  }, []);

  // Determine user's current rank
  const rankedPlayers = players.sort((a, b) => b.points - a.points);
  const userRank = rankedPlayers.findIndex(p => p.id === currentUser.id) + 1;

  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <div className="leaderboard-container">
          <h1 className="leaderboard-title">
            <Crown size={36} color="#FFD700" />
            UPSC Champions
          </h1>

          {/* Podium for Top 3 */}
          <div className="podium-container">
            {rankedPlayers.slice(0, 3).map((player, index) => {
              const podiumHeight = index === 0 ? 150 : index === 1 ? 120 : 100;
              const podiumColor = index === 0 ? '#FFD700' : index === 1 ? '#C0C0C0' : '#cd7f32';
              const positionText = index === 0 ? '1st' : index === 1 ? '2nd' : '3rd';

              return (
                <motion.div
                  key={player.id}
                  className="podium-stand"
                  initial={{ opacity: 0, y: 100, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: podiumHeight }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                >
                  <div className="podium-rank">{positionText}</div>
                  <div className="podium-avatar">
                    <img src={player.avatar} alt={player.name} />
                  </div>
                  <div className="podium-name">{player.name}</div>
                  <div className="podium-points">{player.points} pts</div>
                  <div className="podium-base" style={{ backgroundColor: podiumColor }}></div>
                </motion.div>
              );
            })}
          </div>

          {/* Player List */}
          <div className="players-list-container">
            <div className="players-list-header">
              <span>Rank</span>
              <span>Player</span>
              <span>Points</span>
            </div>
            <div className="players-list">
              {rankedPlayers.slice(3).map((player, index) => (
                <motion.div
                  key={player.id}
                  className={`player-row ${player.id === currentUser.id ? 'current-user' : ''}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 * (index + 3) }}
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="player-rank">#{index + 4}</span>
                  <div className="player-info">
                    <img src={player.avatar} alt={player.name} className="player-avatar" />
                    <span className="player-name">{player.name}</span>
                  </div>
                  <span className="player-points">{player.points} pts</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Current User's Rank Card */}
          <div className="current-user-card">
            <h3>Your Rank</h3>
            <div className="user-details">
              <span className="user-rank">#{userRank}</span>
              <div className="user-info">
                <img src={currentUser.avatar} alt={currentUser.name} className="user-avatar" />
                <span className="user-name">{currentUser.name}</span>
              </div>
              <span className="user-points">{currentUser.points} pts</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Leaderboard;