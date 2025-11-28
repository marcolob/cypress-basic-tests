import FormPage from '../../pages/FormPage';

describe('Form Edge Cases - SauceDemo', () => {

  beforeEach(() => {
    // 🔹 Visita la pagina del form
    cy.visit('/form'); // sostituire con URL reale del form
  });

  it('should show errors for empty required fields', () => {
    // 🔹 Invio del form senza compilare i campi
    FormPage.submitButton.click();

    // 🔹 Verifica che appaiano i messaggi di errore per campi obbligatori
    cy.get('#name-error').should('be.visible').and('contain.text', 'Name is required');
    cy.get('#email-error').should('be.visible').and('contain.text', 'Email is required');
  });

  it('should show error for invalid email format', () => {
    // 🔹 Inserimento dati parziali/errati
    FormPage.nameInput.type('Marco');
    FormPage.emailInput.type('email-non-valida');

    // 🔹 Invio form
    FormPage.submitButton.click();

    // 🔹 Verifica messaggio di errore per email non valida
    cy.get('#email-error')
      .should('be.visible')
      .and('contain.text', 'Invalid email format');
  });

});
