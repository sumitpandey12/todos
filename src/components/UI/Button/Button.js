import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <button className={`button ${props.className}`} type={props.type}>
      {props.children}
    </button>
  );
};

export default Button;
