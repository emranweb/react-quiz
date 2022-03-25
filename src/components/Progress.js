import React from "react";
import style from "../style/Progress.module.css";

const Progress = () => {
  return (
    <div className={style.progressBar}>
      <div className={style.backButton}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className={style.rangeArea}>
        <div className="tooltip">24% Cimplete!</div>
        <div className={style.rangeBody}>
          <div className={style.progress} style="width: 20%"></div>
        </div>
      </div>
      <a href="result.html">
        <button className="button next">
          <span>Next Question</span>
          <span className="material-icons-outlined"> arrow_forward </span>
        </button>
      </a>
    </div>
  );
};

export default Progress;
