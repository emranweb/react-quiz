import React from "react";
import image from "../assets/3.jpg";
import style from "../style/MiniPlayer.module.css";

const MiniPlayer = () => {
  return (
    <div className={`${style.miniPlayer} ${style.floatingBtn}`}>
      <span className="material-icons-outlined open"> play_circle_filled </span>
      <span className="material-icons-outlined close"> close </span>
      <img src={image} alt="" />
      <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
    </div>
  );
};

export default MiniPlayer;
