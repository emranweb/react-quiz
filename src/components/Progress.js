import React from "react";
import { Link } from "react-router-dom";
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
      <Link to="/result">
        <Button className={`button next`}>
          <span>Next Question</span>
          <span className="material-icons-outlined"> arrow_forward </span>
        </Button>
      </Link>
    </div>
  );
};

export default Progress;
