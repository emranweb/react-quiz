import React, { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import Answers from "../components/Answers";
import MiniPlayer from "../components/MiniPlayer";
import Progress from "../components/Progress";
import useQuestionList from "../hook/useQuestionList";
import Question from "../components/Question";

const initialState = [];
const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      if (action.value) {
        action.value.options.forEach((item) => console.log(item));
      }

    default:
      return state;
  }
};

const Quiz = () => {
  const { id } = useParams();
  const { questions, error, loading } = useQuestionList(id);

  const [newQuestion, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (questions) {
      dispatch({ type: "add", value: questions });
    } else {
      console.log("data not exist");
    }
  }, [questions]);

  return (
    <>
      <h1>Pick three of your favorite Star Wars Flims</h1>
      <h4>Question can have multiple answers</h4>
      <Answers />
      <Progress />
      <MiniPlayer />
    </>
  );
};

export default Quiz;
