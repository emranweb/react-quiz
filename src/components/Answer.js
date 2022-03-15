import React from "react";

const Answer = ({ className, children, ...rest }) => {
  return (
    <label className={className} {...rest}>
      <input type="checkbox" id="option1" />
      {children}
    </label>
  );
};

export default Answer;
