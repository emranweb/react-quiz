import React from "react";
import style from "../style/Answers.module.css";
import CheckBox from "./CheckBox";

const Answers = ({ options, handleChange, disable }) => {
  return (
    <div className={style.answers}>
      {options &&
        options.map((el, index) => {
          return (
            <div key={index}>
              {disable ? (
                <CheckBox
                  className={`${style.answer} ${
                    el.correct ? style.correct : el.checked ? style.wrong : null
                  }`}
                  text={el.title}
                  value={index}
                  checked={el.checked}
                  correct={el.correct}
                  disabled
                  onChange={(e) => handleChange(e, index)}
                />
              ) : (
                <CheckBox
                  className={style.answer}
                  text={el.title}
                  value={index}
                  checked={el.checked}
                  correct={el.correct}
                  onChange={(e) => handleChange(e, index)}
                />
              )}
            </div>
          );
        })}
    </div>
  );
};

export default Answers;
