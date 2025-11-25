class ProductsPage {
    // Selectors
    productTitle() { return cy.get('.inventory_item_name'); }
    addToCartButton(productName) { 
        return cy.contains('.inventory_item', productName).find('button'); 
    }
    shoppingCartLink() { return cy.get('.shopping_cart_link'); }

    // Actions
    addProductToCart(productName) { this.addToCartButton(productName).click(); }
    goToCart() { this.shoppingCartLink().click(); }
}

export default new ProductsPage();
