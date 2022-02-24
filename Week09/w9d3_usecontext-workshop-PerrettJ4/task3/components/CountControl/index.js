import React from "react";
import { useCountContext } from "../../countContext";

function CountControl() {
  const [count, increment] = useCountContext();
  console.log(count, increment);
  return (
    <div>
      <button
        onClick={() => {
          console.log("I should add to count!");
          increment();
        }}
      >
        Add to count!
      </button>
    </div>
  );
}
export default CountControl;
