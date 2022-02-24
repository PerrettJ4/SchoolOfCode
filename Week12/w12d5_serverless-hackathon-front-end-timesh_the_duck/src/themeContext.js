import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext("normal");

export const LSDtheme = {
  normal: false,
  lsd: true,
};

export function ThemeProvider({ children }) {
  const [isLSDMode, setIsLSDMode] = useState(false);
  function toggleTheme() {
    setIsLSDMode(!isLSDMode);
  }
  return (
    <ThemeContext.Provider
      value={[LSDtheme[isLSDMode ? "lsd" : "normal"], toggleTheme]}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  return useContext(ThemeContext);
}
