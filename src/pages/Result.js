import React from "react";
import Analysis from "../components/Analysis";
import Summary from "../components/Summary";
import { useLocation, useParams } from "react-router-dom";
import Answer from "../components/Answer";
import useAnswer from "../hook/useAnswer";
import _ from "lodash";

const Result = () => {
  const { id } = useParams();
  const { answers, loading, error } = useAnswer(id);
  const location = useLocation();

  const calculate = () => {
    let score = 0;

    answers.forEach((question, index1) => {
      let correctIndex = [];
      let checkedIndex = [];

      question.forEach((option, index2) => {
        if (option.correct) {
          correctIndex.push(index2);
        }
        if (location.state[index1].options[index2].checked) {
          checkedIndex.push(index2);
          option.checked = true;
        }
      });
      console.log(correctIndex);
      console.log(checkedIndex);
      if (_.isEqual(correctIndex, checkedIndex)) {
        score = score + 5;
      }
    });

    return score;
  };

  const userScore = calculate();
  console.log(userScore);

  return (
    <>
      <Summary />
      <Analysis />
    </>
  );
};

export default Result;
