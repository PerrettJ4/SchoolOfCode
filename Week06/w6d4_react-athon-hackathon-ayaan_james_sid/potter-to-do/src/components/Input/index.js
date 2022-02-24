import React from "react";
import "./index.css";

export default function Inputfield({ onChange }) {
  return (
    <div className="inputContainer">
      <input id="author" placeholder="Author" />
      <input id="text" placeholder="ToDo text" />
      <input id="priority" placeholder="Priority" />
      <button
        type="submit"
        id="submit"
        onClick={() => onChange(handleSubmit())}
      >
        Submit{" "}
      </button>
    </div>
  );
}

// onClick grab the input values and return
function handleSubmit() {
  console.log("BUTTON WORKING!");
  const auth = document.querySelector("#author").value;
  const txt = document.querySelector("#text").value;
  const prior = document.querySelector("#priority").value;
  const newEntry = { author: auth, text: txt, priority: prior };
  console.log(auth);
  return newEntry;
}

/*
take in text, author and priority
on Click in submit button which calls addTo Do function
*/
