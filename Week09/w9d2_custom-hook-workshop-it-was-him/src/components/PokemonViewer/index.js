import { useState } from "react";
import useFetch from "../../hooks/useFetch";

function PokemonViewer() {
  const [id, setId] = useState(null);
  const API_URL = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const [pokemon, error] = useFetch(API_URL, [id]);

  if (error) {
    console.log(error);
    console.log(pokemon);
    return <p>Error!</p>;
  }

  return (
    <section>
      <h4>Pokemon</h4>
      <input type="number" onChange={(e) => setId(e.target.value)} value={id} />
      {pokemon && <p>{pokemon.name}</p>}
    </section>
  );
}

export default PokemonViewer;
