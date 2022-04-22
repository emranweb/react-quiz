import React from "react";
import { useEffect } from "react";
import { getDatabase, orderByKey, query, ref } from "firebase/database";

const useVideoList = () => {
  useEffect(() => {
    const fetchVideos = () => {
      const db = getDatabase();
      const videoRef = ref(db, "videos");
      const videoQuery = query(videoRef, orderByKey);
    };
  }, []);
  return <div>useVideoList</div>;
};

export default useVideoList;
