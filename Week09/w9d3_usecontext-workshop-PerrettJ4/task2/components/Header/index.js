import React, { useContext } from "react";
import { useThemeContext, ThemeProvider } from "../../themeContext";

function Header({ title }) {
  const [theme, toggle] = useThemeContext();
  return (
    <header style={theme}>
      <h1>{title}</h1>
      <button
        onClick={() => {
          console.log("theme should toggle!"),
            toggle(),
            console.log(theme, `${toggle}`);
        }}
      >
        Toggle Dark Mode
      </button>
    </header>
  );
}

export default Header;
