import React from "react";
import "./index.css";

export default function BlogPost({
  title,
  author,
  datePosted,
  text,
  image,
  alt,
  isDeleted,
  index,
}) {
  return (
    <article>
      <h1 className="content title">{title}</h1>
      <h4 className="content author">{author}</h4>
      <h6 className="content date">{datePosted}</h6>
      <p className="content p">{text}</p>
      <img src={image} alt={alt} className="content image"></img>
      <button
        className="content button delete"
        onClick={() => {
          isDeleted(index);
          console.log(index, ": DELETE WORKING!");
        }}
      >
        <span role="img" label="bin">
          🗑️
        </span>
      </button>
    </article>
  );
}
