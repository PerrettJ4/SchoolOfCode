import React from "react";
import CountViewer from "../CountViewer";
import classes from "./index.module.css";

const App = () => {
  const [count, setCount] = React.useState<number>(0);

  return (
    <div className={classes.container}>
      <header className={classes.heading}>
        <h1 className={classes.headingText}>Counter example</h1>
      </header>
      <main className={classes.main}>
        <CountViewer count={count} />
        <button
          className={classes.incrementButton}
          onClick={() => setCount((prev) => prev + 1)}
        >
          ➕ Increment
        </button>
      </main>
    </div>
  );
};

export default App;
