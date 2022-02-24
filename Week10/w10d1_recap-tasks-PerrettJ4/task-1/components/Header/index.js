import React from "react";
import { useNameContext, daniel } from "./../App/index";

console.log(daniel());

function Header() {
  const name = useNameContext();
  return <h1>Welcome, {name}!</h1>;
}

export default Header;
