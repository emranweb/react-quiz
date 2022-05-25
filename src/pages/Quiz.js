import React, { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router-dom";
import Answers from "../components/Answers";
import MiniPlayer from "../components/MiniPlayer";
import Progress from "../components/Progress";
import useQuestionList from "../hook/useQuestionList";
import _ from "lodash";

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "questions":
      action.value.forEach((element) =>
        element.options.forEach((element) => (element.checked = false))
      );
      return action.value;
    case "answer":
      const questions = _.cloneDeep(state);
      questions[action.currnet].options[action.index].checked = action.value;
      return questions;
    default:
      return state;
  }
};

const Quiz = () => {
  const { id } = useParams();
  const { questions, error, loading } = useQuestionList(id);
  const [newQuestion, dispatch] = useReducer(reducer, initialState);
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    dispatch({
      type: "questions",
      value: questions,
    });
  }, [questions]);

  const handleChange = (e, index) => {
    dispatch({
      type: "answer",
      currnet: current,
      index: index,
      value: e.target.checked,
    });
    console.log("click are workig");
  };

  const handlePrev = () => {
    console.log("prev");
  };

  const handleNext = () => {
    console.log("next");
  };

  return (
    <>
      {loading && <h3>loading...</h3>}
      {error && <h4>Error</h4>}
      {!loading && (
        <>
          <h1>{newQuestion[current].title}</h1>
          <h4>Question can have multiple answers</h4>
          <Answers
            options={newQuestion[current].options}
            handleChange={handleChange}
          />
          <Progress events={{ prev: handlePrev, next: handleNext }} />
          <MiniPlayer />
        </>
      )}
    </>
  );
};

export default Quiz;
