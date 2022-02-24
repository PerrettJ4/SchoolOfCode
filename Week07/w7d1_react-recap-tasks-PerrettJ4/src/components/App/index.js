import React, { useState } from "react";
import BlogPost from "../BlogPost";
import Comment from "../Comment";

import blogPostData from "../../libs/blogPostData";
import commentData from "../../libs/commentData";
import "./index.css";

function App() {
  const [posts, setPosts] = useState(blogPostData);
  const [comments, setComments] = useState(commentData);

  function deletePost(index) {
    const newPosts = [...posts.slice(0, index), ...posts.slice(index + 1)];
    console.log(newPosts);
    setPosts(newPosts);
  }

  return (
    <div className="App">
      <header className="App-header">
        The Flames Blog{" "}
        <span role="img" label="flame">
          🔥
        </span>
      </header>
      <main>
        {posts.map(({ title, author, datePosted, text, image, alt }, index) => {
          return (
            <BlogPost
              key={index}
              title={title}
              author={author}
              datePosted={datePosted}
              text={text}
              image={image}
              alt={alt}
              isDeleted={deletePost}
            />
          );
        })}
        {comments.map(({ author, text }, index) => {
          return <Comment key={index} author={author} text={text} />;
        })}
      </main>
    </div>
  );
}

export default App;
