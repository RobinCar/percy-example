import PokemonList from "./PokemonList";
import data from "../../data.json";
import "@percy/cypress";

describe("<PokemonList>", () => {
  it("mounts", () => {
    cy.viewport(1024, 768);
    cy.mount(<PokemonList pokemonList={data} />);
    cy.percySnapshot();
  });
});
