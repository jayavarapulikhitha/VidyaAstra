// src/Components/Sidebar.js
import React from "react";
import { NavLink } from "react-router-dom";
import {
  Map,
  ClipboardList,
  Trophy,
  MessageCircle,
  Swords,
  Settings,
  User,
  Home,
  LayoutDashboard,
} from "lucide-react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="dashboard-sidebar-left">
      <div className="sidebar-header">
        <div className="app-logo">📚</div>
        <div className="app-title">VidyaAstra</div>
      </div>
      <nav className="sidebar-nav">
        <NavLink to="/" className="nav-item">
          <Home size={20} /> Home
        </NavLink>
        <NavLink to="/dashboard-upsc" className="nav-item">
          <LayoutDashboard size={20} /> Dashboard
        </NavLink>
        <NavLink to="/roadmap" className="nav-item">
          <Map size={20} /> Study Roadmap
        </NavLink>
        <NavLink to="/tests" className="nav-item">
          <ClipboardList size={20} /> Mock Tests
        </NavLink>
        <NavLink to="/contests" className="nav-item">
          <Trophy size={20} /> Contests
        </NavLink>
        <NavLink to="/doubts" className="nav-item">
          <MessageCircle size={20} /> Doubt Exchange
        </NavLink>
        <NavLink to="/leaderboard" className="nav-item">
          <Swords size={20} /> Leaderboard
        </NavLink>
        <div className="nav-separator"></div>
        <NavLink to="/profile" className="nav-item">
          <User size={20} /> Profile
        </NavLink>
        <NavLink to="/settings" className="nav-item">
          <Settings size={20} /> Settings
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;