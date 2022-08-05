import React from 'react';
import './onboardNavbar.css';
import { Link, NavLink } from 'react-router-dom';
import { ReactComponent as PlaydioLogo } from '../../assets/icons/Playdio_Logo_1.svg';
import { ReactComponent as TwitterLogo } from '../../assets/icons/Twitter.svg';
import { ReactComponent as DiscordLogo } from '../../assets/icons/Discord.svg';
import { ReactComponent as MediumLogo } from '../../assets/icons/Medium.svg';
import { ReactComponent as FacebookLogo } from '../../assets/icons/Facebook.svg';

export default function OnboardNavbar() {
  return (
    <div className="navbar-container">
      <div className="logo-section">
        <div className="logo-container">
          <PlaydioLogo />
        </div>
        <h3 className="brand-name">Playdio</h3>
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
        <Link to="facebook" className="social-link">
          <FacebookLogo />
        </Link>
        <Link to="twitter" className="social-link">
          <TwitterLogo />
        </Link>
        <Link to="discord" className="social-link">
          <DiscordLogo />
        </Link>
        <Link to="medium" className="social-link">
          <MediumLogo />
        </Link>
      </div>
    </div>
  );
}
