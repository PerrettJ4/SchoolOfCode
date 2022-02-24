import React, { useState } from "react";

const Input = ({ addStep }) => {
  const [input, setInput] = useState("");

  return (
    <div>
      <input
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button
        onClick={() => {
          addStep(input);
          setInput("");
        }}
      >
        Add step
      </button>
    </div>
  );
};

export default Input;
