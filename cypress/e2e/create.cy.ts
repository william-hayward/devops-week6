describe("Create Room Test", () => {
  beforeEach(() => {
    cy.visit("/create");
  });

  it("prevents a in-valid from from being submitted", () => {
    // first, we check that errors are not present

    cy.getByData("building-error").should("not.exist");
    cy.getByData("number-error").should("not.exist");
    cy.getByData("capacity-error").should("not.exist");
    cy.getByData("type-error").should("not.exist");

    cy.getByData("submit-button").click();
    cy.getByData("building-error").should("exist");
    cy.getByData("number-error").should("exist");
    cy.getByData("capacity-error").should("exist");
    cy.getByData("type-error").should("exist");
  });

  it("removes errors when correct values are entered", () => {
    cy.getByData("submit-button").click();
    cy.getByData("building-input").eq(0).click();
    cy.getByData("building-error").should("not.exist");
    cy.getByData("number-input").type("405");
    cy.getByData("number-error").should("not.exist");
    cy.getByData("capacity-input").type("50");
    cy.getByData("capacity-error").should("not.exist");
    cy.getByData("type-input").eq(0).click();
  });

  it("creates a new room", () => {
    cy.getByData("building-input").eq(0).click();
    cy.getByData("number-input").type("405");
    cy.getByData("capacity-input").type("50");
    cy.getByData("type-input").eq(0).click();
    cy.getByData("submit-button").click();
    cy.getByData("success-alert").should("exist");
  });


  it("creates a new room - RM building", () => {
    cy.getByData("building-input").eq(2).click();
    cy.getByData("number-input").type("4067");
    cy.getByData("capacity-input").type("50");
    cy.getByData("type-input").eq(0).click();
    cy.getByData("submit-button").click();
    cy.getByData("success-alert").should("exist");
    cy.visit("/")
    cy.getByData("room-item").contains(/RM4067/);
    cy.getByData("room-item").should("have.length", 19);
  });
});

export {};
