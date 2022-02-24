import React from "react";

// Make an app that chooses a random code practice for to do

const options = [
  "Do a codewars kata",
  "Plan a side project",
  "Research around a specific subject",
  "Read some code an understand what its doing",
  "Refactor an old app/exercise",
  "Watch a lecture back",
  "Go to free code camp and refresh some basics",
  "Complete my mastery tasks",
];

function App() {
  return (
    <div>
      <h1>Practice makes perfect!</h1>
      <h2>Your task is:</h2>
      <h3
        style={{
          backgroundColor: "lightcyan",
          boxShadow: "0 0 20px black",
          padding: "10px 10px",
        }}
      >
        {options[Math.floor(Math.random() * options.length - 1)]}
      </h3>
    </div>
  );
}

export default App;
