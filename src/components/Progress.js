import React from "react";
import style from "../style/Progress.module.css";
import Button from "./Button";

const Progress = () => {
  return (
    <div className={style.progressBar}>
      <div className={style.backButton}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className={style.rangeArea}>
        <div className="tooltip">24% Complete!</div>
        <div className={style.rangeBody}>
          <div className={style.progress} style={{ width: "20%" }}></div>
        </div>
      </div>
      <a href="result.html">
        <Button className={`button next`}>
          <span>Next Question</span>
          <span className="material-icons-outlined"> arrow_forward </span>
        </Button>
      </a>
    </div>
  );
};

export default Progress;
