import React from "react";
import { useThemeContext, ThemeProvider } from "../../themeContext";

function Article({ title, paragraphs }) {
  const [theme] = useThemeContext();

  return (
    <article style={theme}>
      <h1>{title}</h1>
      {paragraphs.map((text) => {
        return <p key={text}>{text}</p>;
      })}
    </article>
  );
}

export default Article;
