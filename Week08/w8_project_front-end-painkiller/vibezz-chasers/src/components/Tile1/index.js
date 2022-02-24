import "./index.css";
export default function Tile1({ country, city, landmark, landmarkimg, gridArea }) {
  return (
    <div id= "container" className = {`tile-container2 ${gridArea}`} >
      {" "}
      <div className = "Image">
      <img src={landmarkimg} alt={landmark}/>
      </div>

      <h2 className= "country"> {country}</h2>
      <h1 className= "city"> {city}</h1>

      <p className="Description"> {`Here is the local tourist attractions; ${landmark}`}</p>
<p></p>
    </div>
  );
}