import React from "react";
import "./Pokemon.css";

const imageSrc = (id) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

const Pokemon = ({ name, id, weight, height }) => {
  return (
    <div class="card">
      <div data-cy="name">{name}</div>
      <div>
        <img src={imageSrc(id)} alt=""></img>
      </div>
      <div data-cy="id">{id}</div>
      <div data-cy="weight">Weight: {weight}</div>
      <div data-cy="height">Height: {height}</div>
    </div>
  );
};

export default Pokemon;
