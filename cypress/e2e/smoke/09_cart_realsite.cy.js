// 11_cart_realsite.cy.js - Aggiunta di un prodotto al carrello su SauceDemo

import CartPage from '../../pages/CartPage';

describe('Cart Smoke Test - SauceDemo', () => {
  beforeEach(() => {
    // Login prima di ogni test
    cy.visit('/');
    cy.get('[data-test=username]').type('standard_user');
    cy.get('[data-test=password]').type('secret_sauce');
    cy.get('[data-test=login-button]').click();
  });

  it('should add a product to the cart', () => {
    // Aggiunge il primo prodotto disponibile
    CartPage.addFirstProductToCart();

    // Verifica che il badge del carrello mostri 1 prodotto
    CartPage.getCartCount().should('contain.text', '1');
  });
});
