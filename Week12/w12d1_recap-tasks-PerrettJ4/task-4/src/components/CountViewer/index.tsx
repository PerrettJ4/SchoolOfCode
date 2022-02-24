import classes from "./index.module.css";

// Add type annotations for the CountViewer's props and return value.

type Props = {
  count: number;
};

const CountViewer: React.FC<Props> = ({ count }) => {
  if (0 === count) {
    return <p>Looks like you haven't started counting yet.</p>;
  }
  return (
    <p>
      <span key={count} className={classes.count}>
        {count}
      </span>
      <span> {1 === count ? "time" : "times"}!</span>
    </p>
  );
};

export default CountViewer;
