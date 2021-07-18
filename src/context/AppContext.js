import React, { useState, useContext, createContext } from 'react';
import axios from 'axios';
import { convertQuestion } from '../helpers/question';
import useLocalStorage from '../hooks/useLocalStorage';
import { myData } from '../helpers/mockData';

const Context = createContext();

const initialResult = [...new Array(10)].map((_, index) => ({
  index,
  chosenOption: null,
}));

const AppContextProvider = ({ children }) => {
  const [category, setCategory] = useLocalStorage('category', 'any');
  const [difficulty, setDifficulty] = useLocalStorage('difficulty', 'any');
  const [questions, setQuestions] = useLocalStorage('questions', 'null');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useLocalStorage(false);
  const [currentQues, setCurrentQues] = useLocalStorage('currentQues', 0);
  const [results, setResults] = useLocalStorage('results', initialResult);

  const reset = () => {
    setCategory('any');
    setDifficulty('any');
    setResults(
      [...new Array(10)].map((_, index) => ({
        index,
        chosenOption: null,
      }))
    );
    setCurrentQues(0);
    setQuestions(null);
  };

  const fetchQuestions = async () => {
    if (category === 'special') {
      const newQues = convertQuestion(myData);
      setQuestions(newQues);
      return;
    }
    const url = `https://opentdb.com/api.php?amount=10&category=${
      category === 'any' ? '' : category
    }&difficulty=${difficulty === 'any' ? '' : difficulty}&type=multiple`;
    console.log(url);
    try {
      setLoading(true);
      const res = await axios.get(url);
      const newQues = convertQuestion(res.data.results);
      setQuestions(newQues);
      setError(null);
    } catch (error) {
      setError(error);
      setQuestions(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Context.Provider
      value={{
        category,
        difficulty,
        setCategory,
        setDifficulty,
        fetchQuestions,
        loading,
        questions,
        currentQues,
        setCurrentQues,
        results,
        reset,
        setResults,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useQuizContext = () => useContext(Context);

export default AppContextProvider;
