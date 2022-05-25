import React, { useEffect, useState } from "react";
import { getDatabase, ref, query, orderByKey, get } from "firebase/database";

const useQuestionList = (videoId) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    async function getQuestionList() {
      const db = getDatabase();
      const quizRef = ref(db, `quiz/${videoId}/questions`);
      const quizQuery = query(quizRef, orderByKey());

      try {
        const snapshot = await get(quizQuery);
        if (snapshot.exists()) {
          setQuestions((prev) => [...prev, ...Object.values(snapshot.val())]);
        }
        setLoading(false);
      } catch (error) {
        setLoading(true);
        setError(error);
      }
    }

    getQuestionList();
  }, [videoId]);

  return {
    questions,
    loading,
    error,
  };
};

export default useQuestionList;
