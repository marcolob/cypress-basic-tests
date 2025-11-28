import LoginPage from '../../pages/LoginPage';
import FormPage from '../../pages/FormPage';

describe('Form Positive Tests - SauceDemo', () => {

  beforeEach(() => {
    // 🔹 Visita la home page
    cy.visit('/');

    // 🔹 Login usando il Page Object
    LoginPage.login('standard_user', 'secret_sauce');

    // 🔹 Verifica che il login abbia portato alla pagina inventory
    cy.url().should('include', '/inventory.html');
  });

  it('should submit the form with valid data', () => {
    // 🔹 Compilazione dei campi del form usando il Page Object
    FormPage.fillForm('Marco Lobosco', 'marco@example.com', 'Messaggio di test');

    // 🔹 Verifica che il messaggio di successo sia visibile e corretto
    cy.get('.success-message')
      .should('be.visible')
      .and('contain.text', 'Form submitted successfully');
  });

});
