import React, { useState } from "react";

export default function Input({ submit }) {
  const [recipe, setRecipe] = useState("");

  submit(recipe);

  return (
    <input
      type="text"
      placeholder={recipe}
      onChange={(e) => {
        setRecipe(e.target.value);
      }}
    ></input>
  );
}
