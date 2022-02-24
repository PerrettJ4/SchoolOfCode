import { useState } from 'react';
import { elementalFormsTop2 } from '../elementalWords';

function CounterPage() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('word');

  function increment() {
    setCount(count + 1);
  }

  function handleEnter(e) {
    setText(e.target.value);
    console.log(e.target.value);
  }
  return (
    <>
      <h1>Counter Fun</h1>
      <h2>{count}</h2>
      <button onClick={increment}>+1</button>
      <input
        placeholder="anything"
        onChange={(e) => {
          if (e.key === 'Enter' || e.keyCode === 13) {
            handleEnter();
          }
        }}
      ></input>
      <p>{elementalFormsTop2(text)}</p>
    </>
  );
}

export default CounterPage;
