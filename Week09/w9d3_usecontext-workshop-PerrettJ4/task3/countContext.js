import React, { createContext, useContext, useState } from "react";

const CountContext = createContext(null);

export function CountProvider({ children }) {
  const [count, setCount] = useState(2);

  function increment() {
    setCount(count + 1);
  }

  return (
    <CountContext.Provider value={[count, increment]}>
      {children}
    </CountContext.Provider>
  );
}

export function useCountContext() {
  return useContext(CountContext);
}
