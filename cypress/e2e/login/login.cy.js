import LoginPage from '../../pages/LoginPage';

describe('Login Tests - SauceDemo', () => {

  beforeEach(() => {
    // Visita la pagina di login prima di ogni test
    cy.visit('/');
  });

  it('should login successfully with valid credentials', () => {
    // Esegue login tramite metodo del Page Object
    LoginPage.login('standard_user', 'secret_sauce');

    // Verifica che l'URL sia quello della pagina inventario (login riuscito)
    cy.url().should('include', '/inventory.html');
  });

  it('should show error on invalid credentials', () => {
    // Prova a eseguire login con credenziali errate
    LoginPage.login('wrong_user', 'wrong_password');

    // Verifica la presenza del messaggio di errore
    LoginPage.errorMessage
      .should('be.visible')
      .and('contain.text', 'Username and password do not match any user in this service');
  });

});
