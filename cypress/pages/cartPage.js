class CartPage {
    // Selectors
    cartItems() { return cy.get('.cart_item'); }
    checkoutButton() { return cy.get('[data-test="checkout"]'); }

    // Actions
    verifyProductInCart(productName) {
        this.cartItems().contains(productName).should('exist');
    }
    proceedToCheckout() { this.checkoutButton().click(); }
}

export default new CartPage();
