import React, { useState } from "react";
import { useEffect } from "react";
import { get, getDatabase, orderByKey, query, ref } from "firebase/database";

const useVideoList = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const db = getDatabase();
      const videoRef = ref(db, "videos");
      const videoQuery = query(videoRef, orderByKey);

      try {
        setLoading(true);
        const snapshot = await get(videoQuery);
        setLoading(false);

        console.log(snapshot);

        if (snapshot.exists()) {
          console.log(snapshot);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchVideos();
  }, []);
  return {
    loading,
    error,
    videos,
  };
};

export default useVideoList;
