import Pokemon from "./Pokemon";

describe("<Pokemon>", () => {
  it("mounts", () => {
    cy.mount(<Pokemon name={"Bulbasaur"} id={1} weight={7} height={69} />);
    cy.get("[data-cy=name]").should("have.text", "Bulbasaur");
  });
});
