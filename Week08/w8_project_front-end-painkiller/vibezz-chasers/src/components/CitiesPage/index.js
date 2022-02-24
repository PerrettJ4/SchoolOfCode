import "./index.css";
import { useState, useEffect } from "react";
import Tile from "../Tile1";

const gridAreas = ["a","b","c","d","e","f"]


export default function CitiesPage() {
  const [cities, setCities] = useState([]);
  useEffect(() => {
    fetch(`https://vibezz-chaser.herokuapp.com/concerts`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const array = [...data.payload];
        setCities(array.slice(0, 6));
      });
  }, []);
  console.log(cities);
  return (
    <main className="CitiesPage">
      <header className="cities-header">
        <h1 className= "cities-title" >Cities</h1>
      </header>
        {cities.map((concert, index) => {
          return (
         
              <Tile
                key={index}
                country= {concert.country}
                city={concert.city}
                landmark={concert.landmarks}
                landmarkimg={concert.landmark_imgurl}
                gridArea ={gridAreas[index]}
              />
          
          );
        })}
   
    </main>
  );
}
