import React from "react";
import Analysis from "../components/Analysis";
import Summary from "../components/Summary";
import { useLocation, useParams } from "react-router-dom";
import Answer from "../components/Answer";
import useAnswer from "../hook/useAnswer";

const Result = () => {
  const { id } = useParams();
  const { answers, loading, error } = useAnswer(id);
  const location = useLocation();
  console.log(location.state);
  return (
    <>
      <Summary />
      <Analysis />
    </>
  );
};

export default Result;
