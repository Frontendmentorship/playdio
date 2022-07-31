import React from 'react';
import './OnboardLayout.css';
import LogoBg from '../assets/playdiologobg.png';

function OnboardLayout({ children }) {
  return (
    <div className="onboard-layout">
      <img src={LogoBg} alt="" className="onboard-bg bg-1" draggable={false} />
      <img src={LogoBg} alt="" className="onboard-bg bg-2" draggable={false} />
      <div className="onboard-form-wrapper">{children}</div>
    </div>
  );
}

export default OnboardLayout;
