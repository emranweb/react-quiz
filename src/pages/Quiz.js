import React from "react";
import Answers from "../components/Answers";
import MiniPlayer from "../components/MiniPlayer";
import Progress from "../components/Progress";

const Quiz = () => {
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
