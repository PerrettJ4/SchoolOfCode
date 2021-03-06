import useFetch from "../../hooks/useFetch";
const API_URL = "https://icanhazdadjoke.com/";
function DadJoke() {
  // const [joke, setJoke] = useState("");
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   fetch("https://icanhazdadjoke.com/", {
  //     headers: { Accept: "application/json" },
  //   })
  //     .then((res) => res.json())
  //     .then(({ joke }) => setJoke(joke))
  //     .catch((err) => setError(err));
  // }, []);
  const [joke, error] = useFetch(API_URL);

  console.log(joke);
  if (error) {
    return <p>Error!</p>;
  }

  return (
    <section>
      <h4>Dad Joke!</h4>
      <p>{joke.joke}</p>
    </section>
  );
}

export default DadJoke;
