import React from "react";
import SignUpLogo from "../assets/signup.svg";
import style from "../style/Illustration.module.css";

const Illustration = () => {
  return (
    <div className={style.illustration}>
      <img src={SignUpLogo} alt="Signup" />
    </div>
  );
};

export default Illustration;
