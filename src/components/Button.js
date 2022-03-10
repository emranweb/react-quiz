import React from "react";
import style from "../style/Button.module.css";

const Button = ({ className, children, ...rest } = {}) => {
  return (
    <div className={`${style.button} ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default Button;
