import React, { useState } from "react";
import CartaPokemon from "./components/CartaPokemon/CartaPokemon";
import Grid from "@mui/material/Grid";

const pokemons = [
  {
    pokemonName: "Pikachu",
    pokemonSubtitle: "El raton electrico",
    pokemonImage:
      "https://www.cinemascomics.com/wp-content/uploads/2020/06/pokemon-pikachu.jpg",
  },
  {
    pokemonName: "Charizard",
    pokemonSubtitle: "El dragon de fuego",
    pokemonImage:
      "https://i.blogs.es/b0e512/1200px-ep803_charizard_de_ash/1366_2000.jpeg",
  },
  {
    pokemonName: "Squirtle",
    pokemonSubtitle: "La tortuga de agua",
    pokemonImage: "https://media.vandal.net/i/1200x630/7-2018/2018731071_2.jpg",
  },
];
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Grid container direction="column" align="center" justify="center" spacing={10}>
        <Grid item>
          <Grid
            container
            direction="row"
            justify="center"
            align="center"
            spacing={5}
          >
            {pokemons.map((pokemon) => {
              return (
                <Grid item>
                  <CartaPokemon
                    pokemonName={pokemon.pokemonName}
                    pokemonSubtitle={pokemon.pokemonSubtitle}
                    pokemonImage={pokemon.pokemonImage}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="row"
            justify="center"
            align="center"
            spacing={5}
          >
            {pokemons.map((pokemon) => {
              return (
                <Grid item>
                  <CartaPokemon
                    pokemonName={pokemon.pokemonName}
                    pokemonSubtitle={pokemon.pokemonSubtitle}
                    pokemonImage={pokemon.pokemonImage}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
