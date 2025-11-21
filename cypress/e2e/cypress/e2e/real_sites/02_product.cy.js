describe("Sauce Demo - Product Details", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
  });

  it("should open product details page", () => {
    cy.get(".inventory_item").first().contains("Sauce Labs Backpack").click();
    cy.url().should("include", "inventory-item.html");
    cy.get(".inventory_details_name").should("contain.text", "Sauce Labs Backpack");
    cy.get(".inventory_details_price").should("be.visible");
    cy.get(".inventory_details_desc").should("be.visible");
  });
});
