import React from "react";
import Pokemon from "../pokemon/Pokemon";
import "./PokemonList.css";

const PokemonList = ({ pokemonList }) => {
  return (
    <div class="pokemonList">
      {pokemonList.map((pokemon) => {
        return (
          <Pokemon
            name={pokemon.name}
            id={pokemon.id}
            weight={pokemon.weight}
            height={pokemon.height}
          />
        );
      })}
    </div>
  );
};

export default PokemonList;
