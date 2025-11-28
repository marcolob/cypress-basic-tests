// cypress/pages/productsPage.js
class ProductsPage {
    // Selectors
    productTitle() { return cy.get('.inventory_item_name'); }
    addToCartButton(productName) { 
        return cy.contains('.inventory_item', productName).find('button'); 
    }
    shoppingCartLink() { return cy.get('.shopping_cart_link'); }
    productSortDropdown() { return cy.get('.product_sort_container'); }
    productPrice() { return cy.get('.inventory_item_price'); }

    // Actions
    addProductToCart(productName) { this.addToCartButton(productName).click(); }
    goToCart() { this.shoppingCartLink().click(); }
    selectSortOption(optionValue) { this.productSortDropdown().select(optionValue); }
}

export default new ProductsPage();


