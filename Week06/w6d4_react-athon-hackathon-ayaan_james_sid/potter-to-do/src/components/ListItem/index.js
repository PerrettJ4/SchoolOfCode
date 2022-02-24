import React from "react";
import "./index.css";

/*
Make the delete button work using on click
Create a seperate delete function removeToDo 
*/

function ListItem({ author, text, priority, index, nowDelete }) {
  return (
    <table className="content-table">
      <div className="listItemContainer">
        <tr>
          <td>
            <h4 class="content top">{author}</h4>
          </td>
          <td>
            <p class="content top">Priority: {priority} </p>
          </td>
        </tr>
        <tr>
          <td>
            <li class="content bottom">{text}</li>
          </td>
          <td>
            <button
              class="content bottom"
              onClick={() => {
                console.log(index);
                nowDelete(index);
                console.log("DELETE WORKING!");
              }}
            >
              🗑️
            </button>
          </td>
        </tr>{" "}
      </div>
    </table>
  );
}

export default ListItem;
