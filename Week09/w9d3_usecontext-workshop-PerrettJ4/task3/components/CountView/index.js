import React from "react";
import { useCountContext } from "../../countContext";

function CountView() {
  const [count] = useCountContext();
  return <div style={{ fontSize: "100px" }}>{"🐑".repeat(count)}</div>;
}

export default CountView;
