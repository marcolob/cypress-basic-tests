import CartPage from '../../pages/CartPage';

describe('Cart — Add Multiple Products', () => {

  beforeEach(() => {
    cy.visit('/');

    cy.get('[data-test=username]').type('standard_user');
    cy.get('[data-test=password]').type('secret_sauce');
    cy.get('[data-test=login-button]').click();

    cy.url().should('include', '/inventory.html');
  });

  it('should add two different products to the cart (two PO methods)', () => {

    // 1️⃣ Aggiungo il primo prodotto usando INDEX
    CartPage.addProductByIndex(0);

    // 2️⃣ Aggiungo il secondo con data-test
    CartPage.addProductByDataTest("add-to-cart-sauce-labs-bike-light");

    // 3️⃣ Controllo il badge
    CartPage.getCartCount().should('have.text', '2');

    // 4️⃣ Apro il carrello via PO
    CartPage.openCart();

    // 5️⃣ Controllo che ci siano effettivamente 2 prodotti
    cy.get('.cart_item').should('have.length', 2);
  });

});
