import React from 'react';
import './Button.css';

const Button = function (props) {
  return (
    <button className="button" {...props}>
      {props.text}
    </button>
  );
};

export default Button;
