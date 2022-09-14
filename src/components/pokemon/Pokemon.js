import React from "react";
import "./Pokemon.css";

const imageSrc = (id) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

const Pokemon = ({ name, id, weight, height }) => {
  return (
    <div class="card">
      <div>{name}</div>
      <div>
        <img src={imageSrc(id)} alt=""></img>
      </div>
      <div>Id: {id}</div>
      <div>Weight: {weight}</div>
      <div>Height: {height}</div>
    </div>
  );
};

export default Pokemon;
