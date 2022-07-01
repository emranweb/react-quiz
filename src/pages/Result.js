import React from "react";
import Analysis from "../components/Analysis";
import Summary from "../components/Summary";
import { useLocation, useParams } from "react-router-dom";
import Answer from "../components/Answer";
import useAnswer from "../hook/useAnswer";
import _ from "lodash";
import Question from "../components/Question";

const Result = () => {
  let newAnswer;
  const { id } = useParams();
  const { answers, loading, error } = useAnswer(id);

  if (answers) newAnswer = answers[0];

  const location = useLocation();

  const calculate = () => {
    let score = 0;

    if (newAnswer) {
      newAnswer.forEach((question, index1) => {
        let correctIndex = [];
        let checkedIndex = [];

        question.options.forEach((option, index2) => {
          if (option.correct) correctIndex.push(index2);
          if (location.state[index1].options[index2].checked) {
            checkedIndex.push(index2);
            option.checked = true;
          }
        });
        if (_.isEqual(correctIndex, checkedIndex)) {
          score = score + 5;
        }
      });
      return score;
    }
  };

  const calculateScore = calculate();

  return (
    <>
      <Summary score={calculateScore} noq={newAnswer ? newAnswer.length : 1} />
      <Analysis />
      <Answer options={newAnswer ? newAnswer : []} disabled={true} />
    </>
  );
};

export default Result;
