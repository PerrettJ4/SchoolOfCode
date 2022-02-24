import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Article from "../Article";

import { siteTitle, conTitle, conText } from "../../constants";

import { theme } from "../../theme";

import { ThemeProvider } from "../../themeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="main-container" style={theme.light}>
        <Header title={siteTitle}></Header>
        <Article title={conTitle} paragraphs={conText}></Article>
        <Footer></Footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
