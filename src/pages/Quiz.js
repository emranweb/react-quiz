import React from "react";
import { useParams } from "react-router-dom";
import Answers from "../components/Answers";
import MiniPlayer from "../components/MiniPlayer";
import Progress from "../components/Progress";
import useQuestionList from "../hook/useQuestionList";

const Quiz = () => {
  const { id } = useParams();
  const { questions, error, loading } = useQuestionList(id);
  console.log(questions);
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
