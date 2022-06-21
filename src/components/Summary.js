import React from "react";
import SuccessImage from "../assets/success.png";
import style from "../style/Summery.module.css";

const Summary = ({ score, noq }) => {
  return (
    <div className={style.summary}>
      <div className={style.point}>
        <p className={style.score}>
          Your score is <br /> {score} out of {noq * 5}
        </p>
      </div>

      <div className={style.badge}>
        <img src={SuccessImage} alt="Success" />
      </div>
    </div>
  );
};

export default Summary;
