import React from "react";
import { Link } from "react-router-dom";
import style from "../style/Video.module.css";

const Video = ({ data }) => {
  return (
    <>
      {data.noq > 0 ? (
        <Link to={`/quiz/${data.youtubeID}`}>
          <div className={style.video}>
            <img
              src={`http://img.youtube.com/vi/${data.youtubeID}/maxresdefault.jpg`}
              alt={data.title}
            />
            <p>{data.title}</p>
            <div className={style.qmeta}>
              <p>{data.noq} Questions</p>
              <p>Score : {data.noq * 5}</p>
            </div>
          </div>
        </Link>
      ) : (
        <div className={style.video}>
          <img
            src={`http://img.youtube.com/vi/${data.youtubeID}/maxresdefault.jpg`}
            alt={data.title}
          />
          <p>{data.title}</p>
          <div className={style.qmeta}>
            <p>{data.noq} Questions</p>
            <p>Score : {data.noq * 5}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Video;
