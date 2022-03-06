import React from "react";

const Form = ({ children, ...rest }) => {
  return (
    <>
      <form {...rest}>{children}</form>

      <div class="textInput">
        <input type="text" placeholder="Enter email" />
        <span class="material-icons-outlined"> alternate_email </span>
      </div>

      <div class="textInput">
        <input type="password" placeholder="Enter password" />
        <span class="material-icons-outlined"> lock </span>
      </div>

      <div class="textInput">
        <input type="password" placeholder="Confirm password" />
        <span class="material-icons-outlined"> lock_clock </span>
      </div>

      <label>
        {" "}
        <input type="checkbox" />
        <span>I agree to the Terms & Conditions</span>
      </label>

      <button class="button">
        <span>Submit now</span>
      </button>

      <div class="info">
        Already have an account? <a href="login.html">Login</a> instead.
      </div>
    </>
  );
};

export default Form;
