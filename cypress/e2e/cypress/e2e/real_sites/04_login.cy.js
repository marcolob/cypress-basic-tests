describe("Sauce Demo - Login", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
  });

  it("should login with valid credentials", () => {
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();

    cy.url().should("include", "/inventory.html");
    cy.get(".inventory_list").should("be.visible");
  });
});
