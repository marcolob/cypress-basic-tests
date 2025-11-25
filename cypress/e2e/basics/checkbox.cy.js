describe('Test Checkbox', () => {
  it('Seleziona e deseleziona una checkbox', () => {
    cy.visit('cypress/fixtures/checkbox.html');

    // Controlla che la checkbox sia visibile
    cy.get('input[name="newsletter"]').should('be.visible');

    // Seleziona la checkbox
    cy.get('input[name="newsletter"]').check().should('be.checked');

    // Deseleziona la checkbox
    cy.get('input[name="newsletter"]').uncheck().should('not.be.checked');
  });
});
