import CartPage from '../../pages/CartPage';

describe('Cart Badge UI', () => {

  beforeEach(() => {
    cy.visit('/');

    // Login prima di testare il carrello
    cy.get('[data-test=username]').type('standard_user');
    cy.get('[data-test=password]').type('secret_sauce');
    cy.get('[data-test=login-button]').click();
  });

  it('Aggiorna il badge quando aggiungi un prodotto', () => {
    // Badge inizialmente non visibile
    CartPage.getCartCount().should('not.exist');

    // Aggiungi il primo prodotto
    CartPage.addFirstProductToCart();

    // Badge dovrebbe apparire con numero 1
    CartPage.getCartCount().should('be.visible').and('contain.text', '1');
  });

  it('Aggiorna il badge quando rimuovi un prodotto', () => {
    // Aggiungi il primo prodotto
    CartPage.addFirstProductToCart();
    CartPage.getCartCount().should('be.visible').and('contain.text', '1');

    // Rimuovi il prodotto
    CartPage.removeFirstProductFromCart();

    // Badge dovrebbe sparire
    CartPage.getCartCount().should('not.exist');
  });

  it('Aggiorna correttamente il badge con più prodotti', () => {
    // Aggiunge i primi due prodotti diversi
    CartPage.addProductByIndex(0);
    CartPage.addProductByIndex(1);

    // Verifica badge con numero 2
    CartPage.getCartCount().should('be.visible').and('contain.text', '2');

    // Rimuovi un prodotto
    CartPage.removeFirstProductFromCart();
    CartPage.getCartCount().should('be.visible').and('contain.text', '1');
  });

});
