// cypress/e2e/basics/hello.cy.js

describe('Hello World Test - Google', () => {

  it('should visit Google and verify the page title', () => {
    // 🔹 Visita il sito
    cy.visit('https://www.google.com');

    // 🔹 Verifica che il titolo contenga "Google"
    cy.title().should('include', 'Google');
  });

});
