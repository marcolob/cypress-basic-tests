import LoginPage from '../../pages/LoginPage';
import CartPage from '../../pages/CartPage';
import CheckoutPage from '../../pages/CheckoutPage'; // supponendo tu abbia già un PO

describe('Cart & Checkout Integration - SauceDemo', () => {

  beforeEach(() => {
    // 🔹 Visita la home page
    cy.visit('/');

    // 🔹 Login base usando PO
    LoginPage.login('standard_user', 'secret_sauce');

    // 🔹 Verifica che siamo nella pagina inventory
    cy.url().should('include', '/inventory.html');
  });

  it('should complete checkout with products in cart', () => {
    // 🔹 Aggiungi i primi 2 prodotti al carrello
    CartPage.cartItems.each(($el, index) => {
      if (index < 2) {
        cy.wrap($el).find('[data-test^="add-to-cart"]').click();
      }
    });

    // 🔹 Verifica badge aggiornato
    CartPage.cartBadge.should('contain.text', '2');

    // 🔹 Apri il carrello
    CartPage.openCart();

    // 🔹 Verifica che ci siano 2 prodotti nel carrello
    CartPage.getCartItemCount().should('have.length', 2);

    // 🔹 Prendi nomi e prezzi dei prodotti
    CartPage.getItemNames().then(names => cy.log('Prodotti nel carrello:', names));
    CartPage.getItemPrices().then(prices => cy.log('Prezzi:', prices));

    // 🔹 Procedi al checkout
    CheckoutPage.checkoutButton.click();

    // 🔹 Compila dati checkout (PO)
    CheckoutPage.fillCheckoutForm('Marco', 'Lobosco', '12345');

    // 🔹 Continua e completa ordine
    CheckoutPage.finishButton.click();

    // 🔹 Verifica conferma ordine
    CheckoutPage.confirmationMessage
      .should('be.visible')
      .and('contain.text', 'THANK YOU FOR YOUR ORDER');

    // 🔹 Badge carrello deve scomparire
    CartPage.cartBadge.should('not.exist');
  });

  it('should prevent checkout with empty cart', () => {
    // 🔹 Assicurati carrello vuoto
    CartPage.removeAllProducts();

    // 🔹 Prova ad aprire checkout
    CartPage.openCart();
    CheckoutPage.checkoutButton.should('be.disabled'); // oppure visibile ma non cliccabile
  });

});
