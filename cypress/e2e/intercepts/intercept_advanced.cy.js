// cypress/e2e/intercepts/intercept_advanced.cy.js
describe('Intercept Avanzati - SauceDemo', () => {

  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-test=username]').type('standard_user');
    cy.get('[data-test=password]').type('secret_sauce');
    cy.get('[data-test=login-button]').click();
  });

  it('Simula errore 500 su chiamata prodotti', () => {
    // Intercetta API prodotti e simula errore server
    cy.intercept('GET', '/api/products', {
      statusCode: 500,
      body: { error: 'Internal Server Error' }
    }).as('getProductsError');

    // Visita pagina prodotti che triggera la chiamata
    cy.visit('/inventory.html');
    
    cy.wait('@getProductsError').then((interception) => {
      expect(interception.response.statusCode).to.eq(500);
      expect(interception.response.body.error).to.eq('Internal Server Error');
    });

    // Verifica che UI gestisca l'errore (esempio: messaggio visibile)
    cy.contains('Errore nel caricamento prodotti').should('be.visible');
  });

  it('Simula delay nella risposta API', () => {
    cy.intercept('GET', '/api/products', (req) => {
      req.reply((res) => {
        res.delay(2000); // 2 secondi di ritardo
        res.send({ body: [{ id: 1, name: 'Mock Product', price: 9.99 }] });
      });
    }).as('delayedProducts');

    cy.visit('/inventory.html');
    cy.wait('@delayedProducts');

    cy.contains('Mock Product').should('be.visible');
  });

});
