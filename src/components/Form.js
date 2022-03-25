import React from "react";
import style from "../style/Form.module.css";

const Form = ({ children, className, ...rest }) => {
  return (
    <>
      <form className={`${className} ${style.form}`} {...rest}>
        {children}
      </form>
    </>
  );
};

export default Form;
