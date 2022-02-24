import React from 'react';

function AnswerChoice({ answer, handleAnswerClick, answerIndex }) {
  return <li onClick={() => handleAnswerClick(answerIndex)}>{answer}</li>;
}

export default AnswerChoice;
