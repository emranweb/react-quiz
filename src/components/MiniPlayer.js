import React, { useRef, useState } from "react";
import image from "../assets/3.jpg";
import style from "../style/MiniPlayer.module.css";
import ReactPlayer from "react-player";

const MiniPlayer = () => {
  const buttonRef = useRef();
  const [state, setState] = useState(true);

  const toggleButton = () => {
    if (state) {
      buttonRef.current.classList.add(style.floatingBtn);
      setState(false);
    } else {
      buttonRef.current.classList.remove(style.floatingBtn);
      setState(true);
    }
  };

  return (
    <div
      className={`${style.miniPlayer}`}
      ref={buttonRef}
      onClick={toggleButton}
    >
      <span className={`material-icons-outlined ${style.open}`}>
        play_circle_filled
      </span>
      <span className={`material-icons-outlined ${style.close}`}> close </span>
      <img src={image} alt="" />
      <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
    </div>
  );
};

export default MiniPlayer;
