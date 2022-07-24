import React, { useEffect, useReducer, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Answers from "../components/Answers";
import MiniPlayer from "../components/MiniPlayer";
import Progress from "../components/Progress";
import useQuestionList from "../hook/useQuestionList";
import _ from "lodash";
import { useAuth } from "../context/AuthContext.";
import { getDatabase, set } from "firebase/database";
import { ref } from "firebase/database";

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
  const { current: currnetUser } = useAuth();
  const nagination = useNavigate();
  const location = useLocation();

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
  };

  const handlePrev = () => {
    if (current > 0) {
      setCurrent((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (current + 1 < questions.length) {
      setCurrent((prev) => prev + 1);
    }
  };

  // handle result submit
  const handleSubmit = async () => {
    const userId = currnetUser.uid;
    const db = getDatabase();
    const resultRef = ref(db, `results/${userId}`);
    await set(resultRef, {
      [id]: newQuestion,
    });
    nagination(`/result/${id}`, { state: newQuestion });
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
          <Progress
            events={{
              prev: handlePrev,
              next: handleNext,
              submit: handleSubmit,
            }}
            progress={current}
            length={questions.length}
          />
          <MiniPlayer id={id} title={location.state} />
        </>
      )}
    </>
  );
};

export default Quiz;
