describe("Home Page Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("shows a table containing a list of rooms", () => {
    cy.get("tr").contains("HC208");
    cy.get("tr").contains("RM202");
    cy.get("tr").should("have.length", 19);
  });

  it("navigates to the add room form", () => {
    cy.get("[data-cy='add-room-button'").click();
  });
});

export {}; // this is to fix typescript complaint
