describe("Delete Room Test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("deletes a room from the database", () => {
    cy.getByData("delete-icon").should("exist");
    cy.getByData("delete-icon").eq(0).click();
    cy.getByData("success-alert").should("exist");
    cy.getByData("room-item").should("have.length", 17);
    cy.getByData("room-item").should("not.contain", /RM208/)


  })

});

export {};