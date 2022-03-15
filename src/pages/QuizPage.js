import React from "react";
import Answers from "../components/Answers";
import Layout from "../layouts/Layout";

const QuizPage = () => {
  return (
    <>
      <Layout>
        <h1>Pick three of your favorite Star Wars Flims</h1>
        <h4>Question can have multiple answers</h4>
        <Answers />
      </Layout>
    </>
  );
};

export default QuizPage;
