import React from 'react';
import './OnboardInput.css';

function OnboardInput({ label, ...props }) {
    return (
        <div className="onboarding input-group">
            <label className="input-group__label" htmlFor={props?.id}>
                {label}
            </label>
            <input className="input-group__input" {...props} />
        </div>
    );
}

export default OnboardInput;
