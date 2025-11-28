// cypress/e2e/basics/link.cy.js

describe('Link Smoke Test - SauceDemo', () => {

  beforeEach(() => {
    // Visita la homepage e fai login per accedere ai prodotti
    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test=username]').type('standard_user');
    cy.get('[data-test=password]').type('secret_sauce');
    cy.get('[data-test=login-button]').click();
    cy.url().should('include', '/inventory.html');
  });

  it('Dovrebbe cliccare sul primo prodotto e controllare URL', () => {
    // Clicca sul primo prodotto
    cy.get('.inventory_item_name').first().click();

    // Verifica che l'URL includa "/inventory-item.html" (pagina dettaglio prodotto)
    cy.url().should('include', 'inventory-item.html');
  });

});
