import Header from "./Header";
import "@percy/cypress";

describe("<Header>", () => {
  it("mounts", () => {
    cy.mount(<Header />);
    cy.percySnapshot();
  });
});
