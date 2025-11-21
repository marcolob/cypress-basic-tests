describe("Sauce Demo - Add to Cart", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
  });

  it("should add a product to the cart", () => {
    cy.get(".inventory_item").first().contains("Add to cart").click();
    cy.get(".shopping_cart_badge").should("contain.text", "1");
  });
});
