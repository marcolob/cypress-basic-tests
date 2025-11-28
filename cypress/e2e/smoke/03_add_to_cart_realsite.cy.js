// cypress/e2e/Realsite_SmokeTest/03_add_to_cart.realsite.cy.js
import LoginPage from '../../pages/LoginPage';
import CartPage from '../../pages/CartPage';
import ProductsPage from '../../pages/ProductsPage';

describe('Add to Cart Flow - Smoke Test', () => {

  beforeEach(() => {
    cy.visit('/');
    LoginPage.login('standard_user', 'secret_sauce');
    cy.url().should('include', '/inventory.html');
  });

  it('Dovrebbe aggiungere i primi 2 prodotti al carrello e verificare badge', () => {

    // Aggiunge i primi 2 prodotti
    ProductsPage.productTitle().each(($el, index) => {
      if (index < 2) {
        CartPage.addProductByIndex(index);
      }
    });

    // Badge deve mostrare "2"
    CartPage.getCartCount().should('contain.text', '2');

    // Apri carrello
    CartPage.openCart();

    // Verifica che ci siano 2 prodotti (senza controllare i nomi)
    CartPage.getCartItemCount().should('have.length', 2);
  });

});
