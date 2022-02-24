import { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";

import List from "../List";
import Input from "../Input";

const createStep = (text) => ({ id: nanoid(), text });

const initialSteps = [
  "Learn React",
  "Simulate human actions with Cypress",
  "Instigate the singularity",
].map(createStep);

function App() {
  const [steps, setSteps] = useState(initialSteps);

  function addStep(input) {
    const newSteps = [...steps, createStep(input)];
    setSteps(newSteps);
  }

  function hideEvidence() {
    const newSteps = ["Smile", "Whistle innocently", "Give lots of hugs"].map(
      createStep
    );
    setSteps(newSteps);
  }

  return (
    <main className="App">
      <h1>😈 Plan to take over the world:</h1>
      <Input addStep={addStep} />
      <List list={steps} />
      <button onClick={hideEvidence}>🆘 Hide evidence! 🆘 </button>
    </main>
  );
}

export default App;
