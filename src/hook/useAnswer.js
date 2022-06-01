import React, { useEffect, useState } from "react";
import { getDatabase } from "firebase/database";
import { ref } from "firebase/database";
import { query } from "firebase/database";
import { orderByKey, get } from "firebase/database";

const useAnswer = (videoId) => {
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAnswers = async () => {
      const db = getDatabase();
      const ansRef = ref(db, `answers/${videoId}`);
      const ansQuery = query(ansRef, orderByKey());

      try {
        const snapshot = await get(ansQuery);
        setAnswers((prev) => [...prev, ...Object.values(snapshot.val())]);
        setLoading(false);
        setError("");
      } catch (error) {
        setLoading(true);
        setError(error);
      }
    };
    getAnswers();
  }, [videoId]);

  return {
    answers,
    loading,
    error,
  };
};

export default useAnswer;
