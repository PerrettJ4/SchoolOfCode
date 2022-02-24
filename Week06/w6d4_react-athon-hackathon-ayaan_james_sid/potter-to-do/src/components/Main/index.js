import React, { useState } from "react";
import "./index.css";

import magicNotes from "../../libs/data";

import Input from "../Input";
import ListItem from "../ListItem";

function Main() {
  const [notes, setNotes] = useState(magicNotes);

  function addToDo(newEntry) {
    const newNotes = [...notes, { ...newEntry }];
    console.log(newNotes);
    setNotes(newNotes);
  }

  function removeItem(index) {
    const newList = [...notes.slice(0, index), ...notes.slice(index + 1)];
    console.log(newList);
    setNotes(newList);
  }

  return (
    <main id="main" className="main">
      <Input id="input" onChange={addToDo} />
      <div id="scroll">
        <article>
          {notes.map(({ author, text, priority }, index) => {
            return (
              <ListItem
                key={index}
                index={index}
                author={author}
                text={text}
                priority={priority}
                nowDelete={removeItem}
              />
            );
          })}
        </article>
      </div>
    </main>
  );
}

export default Main;
