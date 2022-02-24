import { useState } from "react";
/* 
import usestate
useCounter () { useState }
have a state for the number
function to increment/decrement
return array with state and functions
export
*/

function useCounter () {
    const [count, setCount] = useState(0);

    function increment() {
        setCount((count) => count + 1);
      }
      function decrement() {
        setCount((count) => Math.max(0, count - 1));
      }

      return [count, increment, decrement];
}

export default useCounter;