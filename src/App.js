import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import data from "./data.json";
import Header from "./components/header/Header";
import PokemonList from "./components/pokemonList/PokemonList";
import PokemonDetails from "./components/about/PokemonDetails";
import "./App.css";

function App() {
  const [pokemonList, setPokemonList] = useState(data);

  return (
    <div className="app">
      <Header />
      <h1 class="title">Pokedex</h1>

      <Router>
        <Routes>
          <Route path="/" element={<PokemonList pokemonList={pokemonList} />} />
          <Route path="/details" element={<PokemonDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
