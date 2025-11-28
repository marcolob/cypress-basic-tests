// Login con credenziali valide su SauceDemo
import LoginPage from '../../pages/LoginPage';

describe('Login Smoke Test - SauceDemo', () => {
  it('should login successfully with valid credentials', () => {
    // Visita la pagina principale
    cy.visit('/');

    // Effettua il login usando il PO
    LoginPage.login('standard_user', 'secret_sauce');

    // Verifica che l'URL contenga /inventory.html
    cy.url().should('include', '/inventory.html');
  });
});

