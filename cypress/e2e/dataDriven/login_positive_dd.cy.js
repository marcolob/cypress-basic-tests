// cypress/e2e/dataDriven/login_positive_dd.cy.js
import LoginPage from '../../pages/LoginPage';

describe('Login Positivo - Data Driven', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  cy.fixture('login_positive.json').then((users) => {
    users.forEach((user) => {
      it(`Login corretto per "${user.username}"`, () => {
        LoginPage.login(user.username, user.password);
        // Controlla che l’URL includa inventory.html
        cy.url().should('include', '/inventory.html');
      });
    });
  });

});
