import "./App.css";
import PostContent from "../../components/App/PostContent";
import CommentSection from "../../components/App/CommentSection";
import articles from "../../libs/articles";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <h1>WikiPigeon</h1>
      <ChakraProvider>
        {articles.map((item, index) => (
          <>
            {" "}
            <PostContent i={index} /> <CommentSection i={index} />
          </>
        ))}
      </ChakraProvider>
    </div>
  );
}

export default App;
