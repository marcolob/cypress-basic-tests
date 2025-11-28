// cypress/e2e/basics/responsive.cy.js

describe('Responsive Viewport Test - Google', () => {

  const viewports = ['iphone-6', 'ipad-2', 'macbook-13', 'macbook-15'];

  viewports.forEach((device) => {
    it(`should display Google title correctly on ${device}`, () => {
      // 🔹 Imposta viewport
      cy.viewport(device);

      // 🔹 Visita Google
      cy.visit('https://www.google.com');

      // 🔹 Verifica titolo
      cy.title().should('include', 'Google');

      // 🔹 Verifica barra di ricerca visibile
      cy.get('input[name="q"]').should('be.visible');
    });
  });

});
