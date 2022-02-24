import React, { useState } from "react";
import "./App.css";

import PokemonViewer from "../PokemonViewer";

function App() {
  const [id, setId] = useState(148);

  function ani() {
    document.querySelector(".pokeball").classList.add("ani");
    document.querySelector(".pokemon.image").style.display = "none";
    setTimeout(() => {
      document.querySelector(".pokeball").classList.remove("ani");
      document.querySelector(".pokemon.image").style.display = "block";
    }, 2000);
  }

  function handleClick() {
    let newId = Math.floor(Math.random() * 151);
    setId(newId);
    console.log(newId);
    ani();
  }
  function previousPokemon() {
    let newId = id < 2 ? id : id - 1;
    setId(newId);
    console.log(newId);
    ani();
  }
  function nextPokemon() {
    let newId = id > 150 ? id : id + 1;
    setId(newId);
    console.log(newId);
    ani();
  }

  return (
    <div className="App">
      {/* call handleClick when button clicked */}
      <button onClick={handleClick}>Get Random Pokemon</button>
      {/*  hand down id as a prop */}
      <button onClick={previousPokemon}>Previous Pokemon</button>
      <button onClick={nextPokemon}>Next Pokemon</button>
      <PokemonViewer id={id} />
    </div>
  );
}

export default App;
