import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "../HomePage";
import AboutPage from "../BeetRoutePage";
import AceVenturaPage from "../AceVenturaPage";

function isSelected(c) {
  document
    .querySelectorAll(".a")
    .forEach(
      (li) => (li.classList.remove("selected"), li.classList.add("unSelected"))
    );
  document.querySelector(`.${c}`).classList.remove("unSelected");
  document.querySelector(`.${c}`).classList.add("selected");
}

function App() {
  return (
    <Router>
      {/* <div className="App">
				<nav className="nav-bar">
					<h1>www.veg.com</h1>
				</nav>
			</div> */}
      <div>
        <nav>
          <div id="james2"></div>
          <ul id="james">
            <li
              className="a home"
              onClick={() => {
                isSelected("home");
              }}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className="a about"
              onClick={() => {
                isSelected("about");
              }}
            >
              <Link to="/about">About</Link>
            </li>
            <li
              className="a ace"
              onClick={() => {
                isSelected("ace");
              }}
            >
              <Link to="/aceventura">Ace Ventura </Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/aceventura">
            <AceVenturaPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
