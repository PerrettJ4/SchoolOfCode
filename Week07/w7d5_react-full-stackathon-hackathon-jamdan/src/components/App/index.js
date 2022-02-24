import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import HomePage from "../HomePage";

import SunPage from "../SunPage";
import sun from "../../planets-better/Sun.png";

import VenusPage from "../VenusPage";
import venus from "../../planets-better/Venus.png";

import MercuryPage from "../MercuryPage";
import mercury from "../../planets-better/Mercury.png";

import EarthPage from "../EarthPage";
import earth from "../../planets-better/Earth.png";

import MarsPage from "../MarsPage";
import mars from "../../planets-better/Mars.png";

import JupiterPage from "../JupiterPage";
import jupiter from "../../planets-better/Jupiter.png";

import SaturnPage from "../SaturnPage";
import saturn from "../../planets-better/Saturn.png";

import NeptunePage from "../NeptunePage";
import neptune from "../../planets-better/Neptune.png";

import UranusPage from "../UranusPage";
import uranus from "../../planets-better/Uranus.png";

import PlutoPage from "../PlutoPage";
import pluto from "../../planets-better/Pluto.png";

const gridAreas = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "k"];
const gridAreasNoE = ["a", "b", "c", "d", "f", "g", "h", "i", "k"];

function goToMiddle(gridArea) {
  document.querySelector("h5").style.display = "block";
  document.querySelector(`.${gridArea}`).classList.add(`isSelected`);
  document
    .querySelectorAll(".content")
    .forEach((li) => li.classList.add("planetsLeave"));
  document.querySelector(`.isSelected`).classList.remove("planetsLeave");
  document.querySelector(`.isSelected`).classList.add("e");
  if (gridArea !== "e") {
    document.querySelector(`.isSelected`).classList.remove(`${gridArea}`);
  }

  return;
}

function reverseSpaceTime(reverseClass) {
  document
    .querySelectorAll(".content")
    .forEach((li) => li.classList.remove("isSelected"));
  document
    .querySelectorAll(".content")
    .forEach((li) => li.classList.remove("planetsLeave"));
  document
    .querySelectorAll(".content")
    .forEach((li) => li.classList.remove("e"));
  document
    .querySelectorAll(".content")
    .forEach((li, index) => li.classList.add(gridAreas[index]));
}

function App() {
  const [memes, setMemes] = useState([]);
  useEffect(() => {
    async function getMemes() {
      const res = await fetch(`https://meme-api.herokuapp.com/gimme/50`);
      const data = await res.json();
      setMemes(data.memes);
    }
    getMemes();
  }, []);
  console.log(memes);
  return (
    <Router>
      <nav>
        <div id="grid-container">
          <li className="header">
            <Link to="/">
              <h1>INTERGALACTIC DANK MEMES</h1>
            </Link>
          </li>
          <li id="me" className="n reverse">
            <Link
              to="/"
              onClick={(e) => {
                console.log(e);
                e.target.style.display = "none";
                reverseSpaceTime("reverse");
              }}
            >
              <h5> ❮❮ REVERSE SPACE TIME CONTINUUM</h5>
            </Link>
          </li>
          <li
            className="content a"
            onClick={() => {
              goToMiddle("a");
            }}
          >
            <Link to="/venus">
              <img src={venus} alt="mars" />
            </Link>
          </li>
          <li
            className="content b"
            onClick={() => {
              goToMiddle("b");
            }}
          >
            <Link to="/mercury">
              <img src={mercury} alt="mercury" />
            </Link>
          </li>
          <li
            className="content c"
            onClick={() => {
              goToMiddle("c");
            }}
          >
            <Link to="/earth">
              <img src={earth} alt="earth" />
            </Link>
          </li>
          <li
            className="content d"
            onClick={() => {
              goToMiddle("d");
            }}
          >
            <Link to="/mars">
              <img src={mars} alt="mars" />
            </Link>
          </li>
          <li
            className="content e"
            onClick={() => {
              goToMiddle("e");
            }}
          >
            <Link to="/sun">
              <img src={sun} alt="happy sun" />
            </Link>
          </li>
          <li
            className="content f"
            onClick={() => {
              goToMiddle("f");
            }}
          >
            <Link to="/jupiter">
              <img src={jupiter} alt="jupiter" />
            </Link>
          </li>
          <li
            className="content g"
            onClick={() => {
              goToMiddle("g");
            }}
          >
            <Link to="/saturn">
              <img src={saturn} alt="saturn" />
            </Link>
          </li>
          <li
            className="content h"
            onClick={() => {
              goToMiddle("h");
            }}
          >
            <Link to="/uranus">
              <img src={uranus} alt="uranus" />
            </Link>
          </li>
          <li
            className="content i"
            onClick={() => {
              goToMiddle("i");
            }}
          >
            <Link to="/neptune">
              <img src={neptune} alt="neptune" />
            </Link>
          </li>
          <li
            className="content k"
            onClick={() => {
              goToMiddle("k");
            }}
          >
            <Link to="/pluto">
              <img src={pluto} alt="pluto" />
            </Link>
          </li>
          <Switch>
            <Route path="/sun">
              {memes.slice(0, 9).map((meme, index) => {
                return (
                  <img
                    key={Math.floor(Math.random() * 99999)}
                    src={meme.url}
                    alt={meme.title}
                    className={gridAreasNoE[index]}
                  />
                );
              })}
              ;
              <SunPage />
            </Route>
            <Route path="/venus">
              {memes.slice(9, 18).map((meme, index) => {
                return (
                  <img
                    key={Math.floor(Math.random() * 99999)}
                    src={meme.url}
                    alt={meme.title}
                    className={gridAreasNoE[index]}
                  />
                );
              })}
              ;
              <VenusPage />
            </Route>
            <Route path="/mercury">
              {memes.slice(18, 27).map((meme, index) => {
                return (
                  <img
                    key={Math.floor(Math.random() * 99999)}
                    src={meme.url}
                    alt={meme.title}
                    className={gridAreasNoE[index]}
                  />
                );
              })}
              ;
              <MercuryPage />
            </Route>
            <Route path="/earth">
              {memes.slice(27, 36).map((meme, index) => {
                return (
                  <img
                    key={Math.floor(Math.random() * 99999)}
                    src={meme.url}
                    alt={meme.title}
                    className={gridAreasNoE[index]}
                  />
                );
              })}
              ;
              <EarthPage />
            </Route>
            <Route path="/mars">
              {memes.slice(36, 45).map((meme, index) => {
                return (
                  <img
                    key={Math.floor(Math.random() * 99999)}
                    src={meme.url}
                    alt={meme.title}
                    className={gridAreasNoE[index]}
                  />
                );
              })}
              ;
              <MarsPage />
            </Route>
            <Route path="/jupiter">
              {memes.slice(41, 50).map((meme, index) => {
                return (
                  <img
                    key={Math.floor(Math.random() * 99999)}
                    src={meme.url}
                    alt={meme.title}
                    className={gridAreasNoE[index]}
                  />
                );
              })}
              ;
              <JupiterPage />
            </Route>
            <Route path="/saturn">
              {memes.slice(5, 14).map((meme, index) => {
                console.log(meme.url, index, gridAreas[index]);
                return (
                  <img
                    key={Math.floor(Math.random() * 99999)}
                    src={meme.url}
                    alt={meme.title}
                    className={gridAreasNoE[index]}
                  />
                );
              })}
              ;
              <SaturnPage />
            </Route>
            <Route path="/uranus">
              {memes.slice(14, 23).map((meme, index) => {
                console.log(meme.url, index, gridAreas[index]);
                return (
                  <img
                    key={Math.floor(Math.random() * 99999)}
                    src={meme.url}
                    alt={meme.title}
                    className={gridAreasNoE[index]}
                  />
                );
              })}
              ;
              <UranusPage />
            </Route>
            <Route path="/neptune">
              {memes.slice(23, 32).map((meme, index) => {
                console.log(meme.url, index, gridAreas[index]);
                return (
                  <img
                    key={Math.floor(Math.random() * 99999)}
                    src={meme.url}
                    alt={meme.title}
                    className={gridAreasNoE[index]}
                  />
                );
              })}
              ;
              <NeptunePage />
            </Route>
            <Route path="/pluto">
              {memes.slice(32, 41).map((meme, index) => {
                console.log(meme.url, index, gridAreas[index]);
                return (
                  <img
                    key={Math.floor(Math.random() * 99999)}
                    src={meme.url}
                    alt={meme.title}
                    className={gridAreasNoE[index]}
                  />
                );
              })}
              ;
              <PlutoPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </nav>
    </Router>
  );
}

export default App;
