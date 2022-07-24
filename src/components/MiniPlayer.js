import React, { useRef, useState } from "react";
import style from "../style/MiniPlayer.module.css";
import ReactPlayer from "react-player/youtube";

const MiniPlayer = ({ id, title }) => {
  const buttonRef = useRef();
  const [state, setState] = useState(false);
  const videoUrl = `youtube.com/watch?v=${id}`;

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
      className={`${style.miniPlayer} ${style.floatingBtn}`}
      ref={buttonRef}
      onClick={toggleButton}
    >
      <span className={`material-icons-outlined ${style.open}`}>
        play_circle_filled
      </span>
      <span className={`material-icons-outlined ${style.close}`}> close </span>
      <ReactPlayer
        className={style.player}
        url={videoUrl}
        width="300px"
        height="200px"
        playing={state}
        controls
      />
      <p>{title}</p>
    </div>
  );
};

export default MiniPlayer;
