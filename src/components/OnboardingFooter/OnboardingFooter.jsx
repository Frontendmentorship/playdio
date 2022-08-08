import React from 'react';
import './OnboardingFooter.css';
import { ReactComponent as Logo } from '../../assets/icons/Playdio_Logo_1.svg';

export default function OnboardingFooter() {
  return (
    <div className="footer-container">
      <div className="top-section">
        <div className="left">
          <h3 className="footer-header">Discover</h3>
          <p className="footer-body">Top Rated Songs</p>
          <p className="footer-body"> Song Library</p>
          <p className="footer-body">Artistes</p>
        </div>
        <hr />
        <div className="right">
          <h3 className="footer-header">Terms & Policies</h3>
          <p className="footer-body">Privacy Policy</p>
          <p className="footer-body">Terms & Conditions</p>
          <p className="footer-body">Community</p>
          <p className="footer-body">Guidelines</p>
        </div>
      </div>
      <div className="bottom-section">
        <div className="footer-logo-container">
          <Logo />
          <p className="footer-logo-text">Playdio</p>
        </div>
        <div className="policies">
          <p> Privacy Policy </p>
          <p> Copyright © 2022 Playdio Inc. All rights reserved.</p>
          <p>Terms & Conditions</p>
        </div>
      </div>
    </div>
  );
}
