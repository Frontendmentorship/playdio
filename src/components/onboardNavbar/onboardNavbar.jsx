import React from 'react';
import './onboardNavbar.css';
import { NavLink } from 'react-router-dom';
import { ReactComponent as PlaydioLogo } from '../../assets/icons/Playdio_Logo_1.svg';
import { ReactComponent as TwitterLogo } from '../../assets/icons/Twitter.svg';
import { ReactComponent as DiscordLogo } from '../../assets/icons/Discord.svg';
import { ReactComponent as DLogo } from '../../assets/icons/Medium.svg';
import { ReactComponent as FacebookLogo } from '../../assets/icons/Facebook.svg';

export default function OnboardNavbar() {
  return (
    <div className="navbar-container">
      <div className="logo-section">
        <div className="logo-container">
          <PlaydioLogo />
        </div>
        <h3>Playdio</h3>
      </div>
      <nav className="nav-links-section">
        <div className="nav-link">
          <NavLink to="/recommended">Recommended</NavLink>
        </div>
        <div className="nav-link">
          <NavLink to="/new-release">New Release</NavLink>
        </div>
        <div className="nav-link">
          <NavLink to="/top-chart">Top Chart</NavLink>
        </div>
        <div className="nav-link">
          <NavLink to="/around-you">Around You</NavLink>
        </div>
        <div className="nav-link">
          <NavLink to="/mood">Mood</NavLink>
        </div>
      </nav>
      <div className="social-links-section">
        <div className="social-link">
          <FacebookLogo />
        </div>
        <div className="social-link">
          <TwitterLogo />
        </div>
        <div className="social-link">
          <DiscordLogo />
        </div>
        <div className="social-link">
          <DLogo />
        </div>
      </div>
    </div>
  );
}
