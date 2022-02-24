import React, { useState } from "react";
const Input = ({ refresh, setRefresh }) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  let body = {
    name: name,
    category: category,
    quantity: quantity,
    image: image,
  }


  return (
    <div>
      <h3>Add New Item</h3>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      ></input>
      <input
        type="text"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        required
      ></input>
      <input
        type="text"
        placeholder="Image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        required
      ></input>
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      ></input>
      <button
        type="button"
        onClick={() => {
          fetch(
            "https://i4hdnof984.execute-api.us-east-1.amazonaws.com/dev/items",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              mode: "no-cors",
              body: JSON.stringify(body)
            }
          ).then(() => {
            setRefresh(refresh + 1)
            setName("")
            setQuantity("")
            setCategory("");
            setImage("")
          })
        }}
      >
        Add
      </button>
    </div>
  );
};

export default Input;
