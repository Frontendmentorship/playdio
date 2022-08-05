import React from 'react';
import './onboardingPage.css';
import OnboardNavbar from '../../components/onboardNavbar/onboardNavbar';
import missionImg from '../../assets/mission-img.png';

export default function OnboardingPage() {
  return (
    <div>
      <div className="onboarding-top-section">
        <OnboardNavbar />
        <div className="get-started">
          <p className="get-started-text">Catch up with the latest music trends on Playdio</p>
          <button className="get-started-btn"> Get Started </button>
        </div>
      </div>
      <div className="playdio-mission">
        <div className="mission-img">
          <img src={missionImg} alt="mission" />
        </div>
        <div className="mission-message">
          <p className="top-msg">
            Playdio is your one stop shop to fill your life with beautiful music. No matter your mood, Playdio has got
            something for you.
          </p>
          <p className="bottom-msg"> Fun . Vibe . Relax </p>
        </div>
      </div>
    </div>
  );
}