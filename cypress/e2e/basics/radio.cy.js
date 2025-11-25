describe('Test Radio Buttons', () => {
  it('Seleziona una opzione radio', () => {
    cy.visit('cypress/fixtures/radio.html');

    // Controlla che le opzioni siano visibili
    cy.get('input[name="genere"]').should('have.length', 2);

    // Seleziona "Maschio"
    cy.get('input[name="genere"][value="maschio"]').check().should('be.checked');

    // Verifica che "Femmina" non sia selezionata
    cy.get('input[name="genere"][value="femmina"]').should('not.be.checked');
  });
});
