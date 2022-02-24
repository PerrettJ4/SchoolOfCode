import React from "react";
import CountControl from "../CountControl";
import CountView from "../CountView";
import { CountProvider } from "../../countContext";

function App() {
  return (
    <CountProvider>
      <>
        <CountView />
        <CountControl />
      </>
    </CountProvider>
  );
}
export default App;
