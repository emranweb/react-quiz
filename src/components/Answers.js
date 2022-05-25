import React from "react";
import style from "../style/Answers.module.css";
import CheckBox from "./CheckBox";

const Answers = ({ options, handleChange }) => {
  console.log(options);
  return (
    <div className={style.answers}>
      {options.map((el, index) => {
        return (
          <CheckBox
            key={index}
            className={style.answer}
            text={el.title}
            value={index}
            checked={el.checked}
            onChange={(e) => handleChange(e, index)}
          />
        );
      })}
    </div>
  );
};

export default Answers;
