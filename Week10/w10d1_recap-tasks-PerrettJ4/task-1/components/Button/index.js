import React from "react";
import { useNameContext } from "../App";

function Button() {
  const name = useNameContext();
  return <button>{name} likes this!</button>;
}

export default Button;
