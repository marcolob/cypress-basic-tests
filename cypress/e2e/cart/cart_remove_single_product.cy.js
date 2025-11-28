import CartPage from '../../pages/CartPage';

describe('Cart — Remove Products', () => {
  beforeEach(() => {
    cy.visit('/');
    // Login
    cy.get('[data-test=username]').type('standard_user');
    cy.get('[data-test=password]').type('secret_sauce');
    cy.get('[data-test=login-button]').click();

    // Aggiungo 3 prodotti
    CartPage.addProductByIndex(0);
    CartPage.addProductByIndex(1);
    CartPage.addProductByIndex(2);

    // Apro il carrello
    CartPage.openCart();
  });

  it('should remove the second product using index', () => {
    // Rimuovo il secondo prodotto (indice 1)
    CartPage.removeProductByIndex(1);

    // Verifico che nel carrello siano rimasti 2 prodotti
    cy.get('.cart_item').should('have.length', 2);

    // Verifico che il badge sia aggiornato
    CartPage.getCartCount().should('have.text', '2');
  });
});
