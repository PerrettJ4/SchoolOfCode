import React, { createContext, useContext, useState } from "react";
import ReactDOM from "react-dom";

const NameContext = createContext();

function App() {
  const [name, setName] = useState("bob");
  function handleChange(e) {
    setName(e.target.value);
  }
  return (
    <NameContext.Provider value={name}>
      <form>
        <label>First Name</label>
        <input
          style={{ marginLeft: "20px" }}
          className="w3-input"
          type="text"
          placeholder="John"
          onChange={handleChange}
        />
      </form>
      <Child />
    </NameContext.Provider>
  );
}

function Child() {
  return <Grandchild></Grandchild>;
}

function Grandchild() {
  return <GreatGrandchild />;
}

function GreatGrandchild() {
  const name = useContext(NameContext);
  console.log(name);
  return (
    <div style={{ width: "300px" }}>
      <h1>Hello {name}!</h1>
      <p>
        Context provides a way to pass data through the component tree without
        having to pass props down manually at every level.{" "}
        <a
          href="https://reactjs.org/docs/context.html"
          target="_blank"
          rel="norefferrer"
        >
          read more here
        </a>
        .
      </p>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
