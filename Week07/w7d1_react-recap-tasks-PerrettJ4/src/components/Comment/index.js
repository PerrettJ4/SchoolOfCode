import React from "react";
import "./index.css";

export default function Comment({ author, text, isDeleted, index }) {
  return (
    <table className="stuff-table">
      <tr>
        <td>
          <div className="stuff avatar">
            {/* <p className="stuff avatar author"> */}
            {author
              .toUpperCase()
              .split(" ")
              .map((item) => item[0])
              .join(" ")}
            {/* </p> */}
          </div>
        </td>
        <td>
          <p className="stuff author">{author}</p>
        </td>
      </tr>
      <tr>
        <td>
          {" "}
          <p className="stuff text">{text}</p>
        </td>
        <td>
          <button
            className="stuff button delete"
            onClick={() => {
              isDeleted(index);
              console.log(index, ": DELETE WORKING!");
            }}
          >
            <span role="img" label="bin">
              🗑️
            </span>
          </button>
        </td>
      </tr>
    </table>
  );
}
