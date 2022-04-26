import React from "react";
import style from "../style/Videos.module.css";
import Video from "./Video";
import useVideoList from "./../hook/useVideoList";

const Videos = () => {
  const { loading, error, videos } = useVideoList();
  console.log(videos);
  return (
    <div className={style.videos}>
      {videos &&
        videos.map((item) => {
          return <Video key={item.youtubeID} data={item} />;
        })}
    </div>
  );
};

export default Videos;
