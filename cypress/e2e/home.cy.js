"use strict";
exports.__esModule = true;
describe("Home Page Test", function () {
  beforeEach(function () {
    cy.visit("http://localhost:3000/");
  });
  it("shows a table containing a list of rooms", function () {
    cy.get("tr").contains("HC208");
    cy.get("tr").contains("RM202");
    cy.get("tr").should("have.length", 19);
  });
  it("navigates to the add room form", function () {
    cy.get("[data-cy='add-room-button'").click();
  });
});
