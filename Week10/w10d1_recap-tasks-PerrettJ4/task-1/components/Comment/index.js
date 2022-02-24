import React from "react";
import { useNameContext } from "../App";

function Comment({ comment }) {
  const name = useNameContext();
  return (
    <div>
      <h5>{comment}</h5>
      <p>By {name}</p>
    </div>
  );
}

export default Comment;
