import React from "react";
import AnswerChoice from "../AnswerChoice";

function QuestionDisplay({ question, answers, handleAnswerClick }) {
  return (
    <div>
      <h3>{question}</h3>
      <ul>
        {answers.map((answer, answerIndex) => (
          <AnswerChoice
            key={answer.id}
            answer={answer.choiceText}
            handleAnswerClick={handleAnswerClick}
            answerIndex={answerIndex}
          />
        ))}
      </ul>
    </div>
  );
}

export default QuestionDisplay;
