import React from 'react';
import './radio.css';

const Radio = function (props) {
  return (
    <div className="container">
      <input type="radio" name={props.id} className="radio-input"></input>
      <label className="label" htmlFor={props.id}>
        {props.label}
      </label>
    </div>
  );
};

export default Radio;
