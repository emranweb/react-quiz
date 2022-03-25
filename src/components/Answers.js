import React from "react";
import style from "../style/Answers.module.css";
import CheckBox from "./CheckBox";

const Answers = () => {
  return (
    <div className={style.answers}>
      <CheckBox className={style.answer} text="text answer" />
    </div>
  );
};

export default Answers;
