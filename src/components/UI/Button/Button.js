import React from 'react';

import './Button.css';

const Button = props => {
 
  let classname = "button"+props.className
  return (
    <button type={props.type} className={classname} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
