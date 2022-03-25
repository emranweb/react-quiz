import React from "react";
import SignupImage from "../assets/signup.svg";
import style from "../style/Illustration.module.css";

const Illustration = () => {
  return (
    <div class={style.illustration}>
      <img src={SignupImage} alt="Signup" />
    </div>
  );
};

export default Illustration;
