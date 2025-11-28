// cypress/e2e/dataDriven/login_negative_dd.cy.js
import LoginPage from '../../pages/LoginPage';

describe('Login Negativo - Data Driven', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  // Carica i dati da fixture JSON
  cy.fixture('login_negative.json').then((users) => {
    users.forEach((user) => {
      it(`Errore login con username: "${user.username || 'vuoto'}" e password: "${user.password || 'vuoto'}"`, () => {
        // Usa il Page Object per il login
        LoginPage.login(user.username, user.password);

        // Verifica che l’errore sia visibile e corretto
        LoginPage.errorMessage
          .should('be.visible')
          .and('contain.text', user.expectedError);
      });
    });
  });

});
