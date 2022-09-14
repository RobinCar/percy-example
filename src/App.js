import React, { useState } from "react";
import data from "./data.json";
import Header from "./components/header/Header";
import PokemonList from "./components/pokemonList/PokemonList";
import "./App.css";

function App() {
  const [pokemonList, setPokemonList] = useState(data);

  return (
    <div className="app">
      <Header />
      <h1 class="title">Pokedex</h1>
      <PokemonList pokemonList={pokemonList} />
    </div>
  );
}

export default App;
