import "./index.css";
import articles from "../../../libs/articles";
import { HStack, Button } from "@chakra-ui/react";
import { FaSadCry, FaAngry, FaHeart, FaThumbsUp } from "react-icons/fa";

export default function CommentSection({ i }) {
  return (
    <>
      <HStack className="react-buttons">
        <Button
          colorScheme="like"
          leftIcon={<FaThumbsUp />}
          style={{ backgroundColor: "green" }}
        >
          Like
        </Button>
        <Button
          colorScheme="angry"
          leftIcon={<FaHeart />}
          style={{ backgroundColor: "red" }}
        >
          Heart
        </Button>
        <Button
          colorScheme="comment"
          leftIcon={<FaAngry />}
          style={{ backgroundColor: "orange" }}
        >
          Angry
        </Button>
        <Button
          colorScheme="comment"
          leftIcon={<FaSadCry />}
          style={{ backgroundColor: "blue" }}
        >
          Sad
        </Button>
      </HStack>
      <section className="comment-section">
        {articles[i].comments.map((comment) => {
          return (
            <div className="comment">
              <h4>{comment.name} says:</h4>
              <p>{comment.text}</p>
            </div>
          );
        })}
      </section>
    </>
  );
}
