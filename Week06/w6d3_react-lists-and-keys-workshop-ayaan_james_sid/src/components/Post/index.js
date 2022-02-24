import React from "react";

import "./index.css";

function Post({ title, date, author, text, highlights, image }) {
  return (
    <article>
      <h1>{title}</h1>
      <p>{date}</p>
      <p>{author}</p>
      <p>{text}</p>
      <img src={image.link} alt={image.alt}></img>
      {highlights.map((element) => {
        return <li>{element}</li>;
      })}
    </article>
  );
}

export default Post;
