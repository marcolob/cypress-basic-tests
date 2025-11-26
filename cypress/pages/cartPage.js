class CartPage {
  // --- Getters ---
  get cartBadge() { return cy.get('[data-test=shopping-cart-badge]'); }
  get cartLink() { return cy.get('[data-test=shopping-cart-link]'); }
  get addToCartButtons() { return cy.get('button[class*="btn_inventory"]'); }
  get removeFromCartButtons() { return cy.get('button[class*="btn_inventory"][name^="remove"]'); }

  // --- Metodi azioni utente ---
  addFirstProductToCart() {
    this.addToCartButtons.first().click();
  }

  addProductByIndex(index) {
    this.addToCartButtons.eq(index).click();
  }

  addProductByDataTest(productDataTest) {
  cy.get(`[data-test="${productDataTest}"]`).click();
}

  removeFirstProductFromCart() {
    this.removeFromCartButtons.first().click();
  }

  openCart() {
    this.cartLink.click();
  }

  getCartCount() {
    return this.cartBadge;
  }
}

// Esportiamo un'istanza pronta all'uso
export default new CartPage();
