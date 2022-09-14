import Header from "./Header";

describe("<Header>", () => {
  it("mounts", () => {
    cy.mount(<Header />);
  });
});
