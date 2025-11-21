describe("Sauce Demo - Homepage", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
  });

  it("should display login form and all elements", () => {
    // Controlla che il logo sia visibile
    cy.get(".login_logo").should("be.visible");

    // Controlla che il campo username sia visibile e abilitato
    cy.get("#user-name").should("be.visible").and("be.enabled");

    // Controlla che il campo password sia visibile e abilitato
    cy.get("#password").should("be.visible").and("be.enabled");

    // Controlla che il bottone login sia visibile e abilitato
    cy.get("#login-button").should("be.visible").and("be.enabled");
  });
});
