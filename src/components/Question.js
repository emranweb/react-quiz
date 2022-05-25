import React from "react";
import Answers from "./Answers";
import style from "../style/Question.module.css";

const Question = () => {
  return (
    <div className={style.question}>
      <div className={style.qtitle}>
        <span className="material-icons-outlined"> help_outline </span>
        Here goes the question from Learn with Sumit?
      </div>
      <Answers />
    </div>
  );
};

export default Question;
