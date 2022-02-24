import React from "react";
import { useThemeContext, ThemeProvider } from "../../themeContext";

function Footer() {
  const [theme] = useThemeContext();
  return <footer theme={theme}>Made with ❤️ by @mrbenbot</footer>;
}

export default Footer;
