import React from "react";
import CourseImage from "../assets/3.jpg";
import style from "../style/Video.module.css";

const Video = () => {
  return (
    <>
      <a href="quiz.html">
        <div className={style.video}>
          <img src={CourseImage} alt="" />
          <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
          <div className={style.qmeta}>
            <p>10 Questions</p>
            <p>Score : Not taken yet</p>
          </div>
        </div>
      </a>
    </>
  );
};

export default Video;
