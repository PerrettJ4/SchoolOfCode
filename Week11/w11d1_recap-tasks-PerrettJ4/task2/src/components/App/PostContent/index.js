import "./index.css";
import articles from "../../../libs/articles";

export default function PostContent({ i }) {
  return (
    <div className="post-content">
      <article className="post">
        <h2>{articles[i].title}</h2>
        {articles[i].paragraphs.map((paragraph) => (
          <p>{paragraph}</p>
        ))}
      </article>
    </div>
  );
}
