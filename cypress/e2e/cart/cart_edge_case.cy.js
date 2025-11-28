import CartPage from '../../pages/CartPage';
import ProductsPage from '../../pages/productsPage';

describe('Cart Edge Case - Aggiunta e rimozione rapida', () => {

  beforeEach(() => {
    // Login prima del test
    cy.visit('/');
    cy.get('[data-test=username]').type('standard_user');
    cy.get('[data-test=password]').type('secret_sauce');
    cy.get('[data-test=login-button]').click();
  });

  it('Gestisce aggiunta e rimozione rapida dello stesso prodotto', () => {
    // Seleziona il primo prodotto
    ProductsPage.getProductByIndex(0).within(() => {

      // Aggiunge il prodotto
      cy.get('.btn_inventory').click();

      // Rimuove immediatamente
      cy.get('.btn_inventory').click();

      // Riprova ad aggiungerlo rapidamente
      cy.get('.btn_inventory').click();
    });

    // Verifica che il badge sia aggiornato correttamente
    CartPage.cartBadge
      .should('be.visible')
      .and('contain', '1');

    // Entra nel carrello
    CartPage.openCart();

    // Verifica che sia presente solo 1 prodotto
    cy.get('.cart_item').should('have.length', 1);
  });
});
