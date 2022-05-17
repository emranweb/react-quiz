import React from "react";
import style from "../style/Answers.module.css";
import CheckBox from "./CheckBox";
import useQuestionList from "../hook/useQuestionList";

const Answers = () => {
  const { questions } = useQuestionList();
  console.log(questions);
  return (
    <div className={style.answers}>
      <CheckBox className={style.answer} text="text answer" />
    </div>
  );
};

export default Answers;
