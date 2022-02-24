import React, { useState } from "react";
import Input from "./Input";
import "index.css";

/* Task 3 - Below is a card component that displays a recipe. Change whatever you need to to make the component more reusable. */

function RecipeCard() {
  const [recipe, setRecipe] = useState("My fav banan soup");

  function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }
  return (
    <div>
      <Input submit={setRecipe} />
      <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fonejive.com%2Fwp-content%2Fuploads%2F2014%2F02%2Fbanana-soup.jpg&f=1&nofb=1" />
      <h2>{recipe}</h2>
      <h3>Banana</h3>
      <h4>30 November 2020</h4>
      <p>
        This is my favourite soup recipe to warm your peel on these cold winter
        days. Description of recipe...
      </p>
      <button
        onClick={() => {
          console.log("clicked!");
          myFunction();
        }}
      >
        Click me to toggle the popup!
        <span className="popuptext" id="myPopup">
          A Simple Popup!
        </span>
      </button>
    </div>
  );
}

export default RecipeCard;

// submit={(recipe) => setRecipe(recipe)}
