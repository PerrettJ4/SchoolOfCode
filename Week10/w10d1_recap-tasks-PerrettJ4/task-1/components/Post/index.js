import React from "react";
import Comment from "../Comment";
import Button from "../Button";
import { useNameContext } from "./../App/index";

function Post({ post, comments, index }) {
  const name = useNameContext();
  return (
    <article key={index}>
      <h2>{post}</h2>
      <h3>By {name}</h3>
      {comments.map((comment) => (
        <Comment comment={comment} />
      ))}
      <Button />
    </article>
  );
}

export default Post;
