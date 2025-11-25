describe('Test Dropdown', () => {
  it('Seleziona un valore dal dropdown', () => {
    cy.visit('cypress/fixtures/dropdown.html');

    // Controlla che il dropdown sia visibile
    cy.get('select[name="frutta"]').should('be.visible');

    // Seleziona un valore
    cy.get('select[name="frutta"]').select('Banana');

    // Verifica che il valore selezionato sia corretto
    cy.get('select[name="frutta"]').should('have.value', 'banana');
  });
});
