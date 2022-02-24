import React, { useState } from "react";
import { nanoid } from "nanoid";
import clsx from "clsx";

const initialTodos = ["Code", "Eat banana", "Hoover"].map((text) => ({
  id: nanoid(),
  text,
}));

function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [text, setText] = useState("");
  const [toggleColor, setToggleColor] = useState(false);

  function addToList(text) {
    const newTodo = { id: nanoid(), text };
    setTodos((oldTodos) => oldTodos.concat(newTodo));
    setText("");
  }

  function handleClick() {
    addToList(text);
    setToggleColor(!toggleColor);
  }

  return (
    <div
      className={`flex min-h-screen bg-gradient-to-r from-green-400 to-blue-300 justify-center items-center )}`}
    >
      <main className="flex-col justify-center items-center">
        <h1
          className={`text-center cursor-text font-bold ${clsx({
            "animate-bounce": toggleColor,
          })} `}
        >
          Shopping List
        </h1>
        <input
          onChange={(event) => setText(event.target.value)}
          placeholder="Add goodies here"
          value={text}
        />
        <button
          className={`bg-red-500 ${clsx({ "bg-yellow-300": toggleColor })}`}
          onClick={() => handleClick()}
        >
          Add item
        </button>
        <ul ClassName="flex-col items-start">
          {todos.map(({ text, id }) => (
            <li className="hover:bg-red-700" key={id}>
              {text}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
