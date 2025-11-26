import CartPage from '../../pages/CartPage';

describe('Cart Tests - SauceDemo', () => {

  beforeEach(() => {
    cy.visit('/');

    // Login prima di testare il carrello
    cy.get('[data-test=username]').type('standard_user');
    cy.get('[data-test=password]').type('secret_sauce');
    cy.get('[data-test=login-button]').click();
  });

  it('should add a product to the cart and update badge', () => {
    // Badge inizialmente non visibile
    CartPage.getCartCount().should('not.exist');

    // Aggiungi il primo prodotto
    CartPage.addFirstProductToCart();

    // Badge dovrebbe apparire con numero 1
    CartPage.getCartCount()
      .should('be.visible')
      .and('contain.text', '1');
  });

});
