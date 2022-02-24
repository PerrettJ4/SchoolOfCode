import React, { useState, useEffect } from "react";

function PokemonViewer({ id }) {
  const [pokemon, setPokemons] = useState();
  useEffect(() => {
    async function getPokemonById() {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await res.json();
      setPokemons(data);
      // console.log(data.name, data.sprites.front_default);
    }
    getPokemonById();
  }, [id]);
  return (
    // <div>
    // 	<p>{pokemons[0].name}</p>
    // 	<img src={pokemons[0].sprites.front_default} alt="James" />
    // </div>

    <div>
      {pokemon ? (
        <>
          {" "}
          <div>
            <p>{pokemon.name}</p>
            <img
              className="pokemon image"
              src={pokemon.sprites.front_default}
              alt="James"
            />
          </div>
        </>
      ) : (
        "helo"
      )}
    </div>
  );
  // const ProfilePage = React.lazy(() => import('./ProfilePage')); // Lazy-loaded
  // // Show a spinner while the profile is loading
  // <Suspense fallback={<Spinner />}>
  //   <ProfilePage />
  // </Suspense>

  // <div>
  // 	{pokemons.length > 0 ? (
  // 		<>
  // 			{' '}

  // 		</>
  // 	) : (
  // 		'Wait a bit...'
  // 	)}
  // </div>
}

export default PokemonViewer;
