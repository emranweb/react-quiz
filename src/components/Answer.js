import React from "react";
import CheckBox from "./CheckBox";
import Answers from "./Answers";

const Answer = ({ options }) => {
  return (
    <>
      {options &&
        options.map((item, index, disable) => {
          return (
            <div key={index}>
              <h5>{item.title}</h5>
              <Answers options={item.options} disable />
            </div>
          );
        })}
    </>
  );
};

export default Answer;
