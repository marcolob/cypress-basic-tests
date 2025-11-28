// cypress/e2e/basics/hello.cy.js

describe('Hello World Smoke Test - SauceDemo', () => {

  it('Dovrebbe visitare la homepage e controllare il titolo', () => {
    // Visita la homepage di SauceDemo
    cy.visit('https://www.saucedemo.com/');

    // Controlla che il titolo della pagina contenga "Swag Labs"
    cy.title().should('include', 'Swag Labs');
  });

});