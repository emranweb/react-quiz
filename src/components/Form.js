import React from "react";

import style from "../style/Form.module.css";

const Form = ({ children, ...rest }) => {
  return (
    <>
      <form {...rest}>{children}</form>
    </>
  );
};

export default Form;
