// cypress/e2e/form.cy.js

describe('Test Modulo di Contatto Locale', () => {
  it('Compila e invia il modulo di contatto', () => {
    // Visita il file HTML locale (relativo alla cartella cypress/fixtures)
    cy.visit('cypress/fixtures/index.html');

    // Controlla che il modulo sia visibile
    cy.get('form').should('be.visible');

    // Compila i campi del modulo
    cy.get('input[name="nome"]').type('Mario Rossi');
    cy.get('input[name="email"]').type('mario.rossi@example.com');
    cy.get('textarea[name="messaggio"]').type('Ciao, vorrei maggiori informazioni sui vostri servizi.');

    // Invia il modulo
    cy.get('button[type="submit"]').click();

    // Verifica che il messaggio di conferma sia visibile
    cy.get('.success-message').should('be.visible').and('contain', 'Grazie per averci contattato!');
  });
});
