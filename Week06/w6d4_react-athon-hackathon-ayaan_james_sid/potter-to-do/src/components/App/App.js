import React from "react";
import "./App.css";

import Header from "../Header";
import Footer from "../Footer";
import Main from "../Main";

function App() {
  document.title = "Potter-to-do List";
  return (
    <div id="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
