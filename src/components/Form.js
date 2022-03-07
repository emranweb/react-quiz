import React from "react";

const Form = ({ children, className, ...rest }) => {
  return (
    <>
      <form className={className} {...rest}>
        {children}
      </form>
    </>
  );
};

export default Form;
