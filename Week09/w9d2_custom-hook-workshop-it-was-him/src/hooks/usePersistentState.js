/*
import useffect
import usestate

set a state 
useeffect
handle change function 
return array with state and handle change

export
*/

import {useState, useEffect} from "react";

function usePersistentState() {
    const [text, setText] = useState(localStorage.getItem("text") || "");

    useEffect(() => {
        localStorage.setItem("text", text);
      }, [text]);
    
    function handleChange(e) {
    setText(e.target.value);
    }

    return [text, handleChange]
}

export default usePersistentState;