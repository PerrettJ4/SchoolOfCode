import "./App.css";
import QuestionDisplay from "../QuestionDisplay";
import ResultsDisplay from "../ResultsDisplay";
import { questions, answers } from "../../libs/questionData";
import { useState, useReducer } from "react";

const initialState = { quizResults: [] };
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ANSWER":
      console.log("Add Answer fired!: ", state, "adding: ", action.payload);
      return { ...state, quizResults: [...state.quizResults, action.payload] };
    case "RESET_ANSWER":
      console.log("State Reset!: ", state);
      return { ...state, quizResults: [] };
    default:
      return state;
  }
};

function App() {
  const [result, setResult] = useState("...pending");
  const [results, resultsDispatch] = useReducer(reducer, initialState);

  function handleAnswerClick(answerIndex) {
    console.log({ answerIndex });
    const answerDict = { 0: "a", 1: "b", 2: "c", 3: "d" };
    resultsDispatch({
      type: "ADD_ANSWER",
      payload: answerDict[answerIndex],
    });
  }

  function handleResetButtonClick() {
    resultsDispatch({
      type: "RESET_ANSWER",
    });
    setResult("Waiting for new score");
  }

  function calculateResults() {
    const arr = [...results.quizResults];
    // const obj = [
    // 	['a', getOccurrence(arr, 'a')],
    // 	['b', getOccurrence(arr, 'b')],
    // 	['c', getOccurrence(arr, 'c')],
    // 	['d', getOccurrence(arr, 'd')],
    // ];
    // let valueToReturn = Math.max(obj[0][1], obj[1][1], obj[2][1], obj[3][1]);
    // console.log(valueToReturn);
    function getOccurrence(array, value) {
      var count = 0;
      array.forEach((v) => v === value && count++);
      return count;
    }
    var obj = {
      a: getOccurrence(arr, "a"),
      b: getOccurrence(arr, "b"),
      c: getOccurrence(arr, "c"),
      d: getOccurrence(arr, "d"),
    };

    let score = Object.keys(obj).reduce((a, b) => (obj[a] > obj[b] ? a : b));
    console.log(Object.keys(obj));
    setResult(score);
  }

  return (
    <main className="app">
      <h1>Personality Quiz</h1>
      {questions.map((question, i) => (
        <QuestionDisplay
          key={question.id}
          question={question.questionText}
          answers={answers[i]}
          handleAnswerClick={handleAnswerClick}
        />
      ))}
      <button onClick={calculateResults}>Calculate results!</button>
      <ResultsDisplay result={result} />
      <button onClick={handleResetButtonClick}>Reset results!</button>
    </main>
  );
}

export default App;
