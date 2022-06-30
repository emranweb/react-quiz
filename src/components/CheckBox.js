import React from "react";

const CheckBox = ({ className, text, correct, ...rest }) => {
  return correct ? (
    <label className={className} style={{ background: "#9aea9a" }}>
      <input type="checkbox" {...rest} /> <span>{text}</span>
    </label>
  ) : (
    <label className={className}>
      <input type="checkbox" {...rest} /> <span>{text}</span>
    </label>
  );
};

export default CheckBox;
