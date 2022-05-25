import React, { useState } from "react";
import style from "../style/Videos.module.css";
import Video from "./Video";
import useVideoList from "./../hook/useVideoList";
import InfiniteScroll from "react-infinite-scroll-component";

const Videos = () => {
  const [page, setPages] = useState(0);
  const { loading, error, videos, hasMore } = useVideoList(page);
  return (
    <div className={style.videos}>
      {videos && (
        <InfiniteScroll
          dataLength={videos.length}
          next={() => setPages(page + 10)}
          hasMore={hasMore}
        >
          {videos.map((item) => {
            return <Video key={item.youtubeID} data={item} />;
          })}
        </InfiniteScroll>
      )}

      {loading && <div>Data loading...</div>}
      {error && <div> Error fetching data </div>}
    </div>
  );
};

export default Videos;
