import React from "react";
import { Link } from "react-router-dom";
import style from "../style/Progress.module.css";
import Button from "./Button";

const Progress = ({ events }) => {
  const { prev, next } = events;
  return (
    <div className={style.progressBar}>
      <div className={style.backButton} onClick={() => prev()}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className={style.rangeArea}>
        <div className="tooltip">24% Complete!</div>
        <div className={style.rangeBody}>
          <div className={style.progress} style={{ width: "20%" }}></div>
        </div>
      </div>
      <Button className={`button next`} onClick={() => next()}>
        <span>Next Question</span>
        <span className="material-icons-outlined"> arrow_forward </span>
      </Button>
    </div>
  );
};

export default Progress;
