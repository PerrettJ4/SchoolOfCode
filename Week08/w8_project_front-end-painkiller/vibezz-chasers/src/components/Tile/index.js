import "./index.css";

export default function Tile({ artistName, artistImg, gridArea }) {
  return (
    <div id="con" className={`tile-container ${gridArea}`}>
      {" "}
      <div className="img-div">
        <img src={artistImg} alt={artistName} />
      </div>
      <div className="card-title">
        <h2>{artistName}</h2>
      </div>
      <p></p>
      <p></p>
    </div>
  );
}

// recive props from parent
// display in a nice way
