import CartPage from '../../pages/CartPage';

describe('Cart — Add Multiple Products', () => {

  beforeEach(() => {
    cy.visit('/');

    // Login
    cy.get('[data-test=username]').type('standard_user');
    cy.get('[data-test=password]').type('secret_sauce');
    cy.get('[data-test=login-button]').click();

    // Verifica di essere su inventory
    cy.url().should('include', '/inventory.html');
  });

  it('should add two different products to the cart (two PO methods)', () => {

    // 1️⃣ Aggiungo il primo prodotto usando INDEX
    CartPage.addProductByIndex(0);

    // 2️⃣ Aggiungo il secondo usando il metodo con PRODUCT NAME
    CartPage.addProductByDataTest("add-to-cart-sauce-labs-bike-light");
    

    // 3 Aggiungo il terzo usando il metodo con PRODUCT NAME
     CartPage.addProductByDataTest("add-to-cart-sauce-labs-bolt-t-shirt");


    // 4 Controllo il badge (dovrebbe essere 3)
    CartPage.getCartCount().should('have.text', '3');

    // 5 Apro il carrello via PO
       CartPage.openCart();

    // 6 Controllo che ci siano effettivamente 3 prodotti
    cy.get('.cart_item').should('have.length', 3);
  });

});
