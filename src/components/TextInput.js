import React from "react";

const TextInput = (props) => {
  return (
    <div className="textInput">
      <input {...props} />
      <span className="material-icons-outlined"> person </span>
    </div>
  );
};

export default TextInput;
