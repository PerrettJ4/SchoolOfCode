import React, { createContext, useContext } from "react";
import Header from "../Header";
import Post from "../Post";

/*Task: Refactor this app so you can use the useContext hook to provide the name 
variable everywhere it's currently used as a prop. */
const name = "Bobby Bootcamper";
export function daniel() {
  return name;
}
console.log(daniel());
const NameContext = createContext();

const posts = [
  {
    post: "I love useContext. It saves me lots of work!",
    comments: ["Nice!", "Same", "Me too!"],
  },
  {
    post: "My journey to understanding hooks in React",
    comments: ["Nice!", "Same", "Me too!"],
  },
  { post: "JSX for Fun and Profit", comments: ["Nice!", "Same", "Me too!"] },
];

function App() {
  return (
    <NameContext.Provider value={name}>
      <Header />
      {posts.map((post, index) => (
        <Post post={post.post} index={index} comments={post.comments} />
      ))}
    </NameContext.Provider>
  );
}

export default App;

export function useNameContext() {
  return useContext(NameContext);
}
