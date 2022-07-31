import React from 'react';
import './OnboardButton.css';

function OnboardButton({ children, ...rest }) {
  return (
    <button {...rest} className={`onboard-button ${rest?.className}`}>
      {children}
    </button>
  );
}

export default OnboardButton;
