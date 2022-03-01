import React from "react";
import style from "../style/Videos.module.css";
import Video from "./Video";

const Videos = () => {
  return (
    <div className={style.videos}>
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
    </div>
  );
};

export default Videos;
