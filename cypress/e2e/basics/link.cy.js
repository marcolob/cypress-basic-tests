// cypress/e2e/basics/link.cy.js

describe('Link Navigation Test - Example Cypress Site', () => {

  beforeEach(() => {
    // 🔹 Visita la home page di esempio
    cy.visit('https://example.cypress.io');
  });

  it('should click the "type" link and verify URL', () => {
    // 🔹 Clicca sul link "type"
    cy.contains('type').click();

    // 🔹 Verifica che l’URL cambi correttamente
    cy.url().should('include', '/commands/actions');
  });

});
