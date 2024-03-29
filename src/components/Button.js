import React from "react";
import style from "../style/Button.module.css";

const Button = ({ className, children, ...rest } = {}) => {
  return (
    <button className={`${style.button} ${className}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
