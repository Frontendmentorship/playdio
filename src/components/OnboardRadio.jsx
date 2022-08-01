import React from 'react';
import './OnboardRadio.css';

function OnboardRadio({ label, ...props }) {
  return (
    <div className="onboarding-radio input-group">
      <input className="input-group__input" type="radio" {...props} />
      <label className="input-group__label" htmlFor={props?.id}>
        {label}
      </label>
    </div>
  );
}

export default OnboardRadio;
