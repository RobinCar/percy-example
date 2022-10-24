import React from "react";
import Pokemon from "../pokemon/Pokemon";
import "./PokemonDetails.css";

const PokemonDetails = () => {
  return (
    <div class="pokemonDetails">
      <Pokemon name="Pikachu" id={25} weight={60} height={4} />
    </div>
  );
};

export default PokemonDetails;
