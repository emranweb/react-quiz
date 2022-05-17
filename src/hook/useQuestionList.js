import React, { useEffect, useState } from "react";
import { getDatabase, ref, query, orderByKey, get } from "firebase/database";

const useQuestionList = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    async function getQuestionList() {
      const db = getDatabase();
      const quizRef = ref(db, "quiz");
      const quizQuery = query(quizRef, orderByKey());

      try {
        setError("");
        setLoading(false);
        const snapshot = await get(quizQuery);
        if (snapshot.exists()) {
          setQuestions((prev) => [...prev, ...Object.values(snapshot.val())]);
        }
      } catch (error) {
        setLoading(true);
        setError(error);
        console.log(error);
      }
    }

    getQuestionList();
  }, []);

  return {
    questions,
    loading,
  };
};

export default useQuestionList;
