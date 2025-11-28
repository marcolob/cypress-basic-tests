import CartPage from '../../pages/CartPage';

describe('Cart — Remove Multiple Products', () => {

  beforeEach(() => {
    cy.visit('/');

    // Login
    cy.get('[data-test=username]').type('standard_user');
    cy.get('[data-test=password]').type('secret_sauce');
    cy.get('[data-test=login-button]').click();
  });

  it('should remove two products using index', () => {
    // Aggiungo 3 prodotti
    CartPage.addProductByIndex(0);
    CartPage.addProductByIndex(1);
    CartPage.addProductByIndex(2);

    // Apro il carrello
    CartPage.openCart();

    // Rimuovo il primo e il secondo prodotto (indice 0 e 1)
    CartPage.removeProductByIndex(0);
    CartPage.removeProductByIndex(1);

    // Verifico che rimanga solo 1 prodotto
    CartPage.getCartItemCount().should('have.length', 1);

    // Verifico badge
    CartPage.getCartCount().should('have.text', '1');
  });

  it('should remove two specific products by name', () => {
    // Aggiungo i prodotti specifici
    CartPage.addProductByDataTest('add-to-cart-sauce-labs-backpack');
    CartPage.addProductByDataTest('add-to-cart-sauce-labs-bike-light');

    // Apro il carrello
    CartPage.openCart();

    // Assicuro che i prodotti siano presenti prima di rimuovere
    CartPage.cartItemNames.contains('Sauce Labs Backpack').should('exist');
    CartPage.cartItemNames.contains('Sauce Labs Bike Light').should('exist');

    // Rimuovo i prodotti per nome
    CartPage.removeProductByName('Sauce Labs Backpack');
    CartPage.removeProductByName('Sauce Labs Bike Light');

    // Verifico che il carrello sia vuoto
    CartPage.getCartItemCount().should('have.length', 0);
    CartPage.getCartCount().should('not.exist');
  });

  it('should remove all products using removeAllProducts()', () => {
    // Aggiungo 3 prodotti
    CartPage.addProductByIndex(0);
    CartPage.addProductByIndex(1);
    CartPage.addProductByIndex(2);

    // Apro il carrello
    CartPage.openCart();

    // Rimuovo tutti i prodotti
    CartPage.removeAllProducts();

    // Verifico carrello vuoto
    CartPage.getCartItemCount().should('have.length', 0);
    CartPage.getCartCount().should('not.exist');
  });

});
