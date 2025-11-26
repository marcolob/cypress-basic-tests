import LoginPage from '../../pages/LoginPage';

describe('Login Negativo', () => {

  beforeEach(() => {
    cy.visit('/'); // apri la pagina di login prima di ogni test
  });

  it('Mostra errore con username e password sbagliati', () => {
    LoginPage.enterUsername('wrong_user');
    LoginPage.enterPassword('wrong_password');
    LoginPage.clickLogin();

    LoginPage.errorMessage
      .should('be.visible')
      .and('contain.text', 'Username and password do not match any user in this service');
  });

  it('Mostra errore se il campo username è vuoto', () => {
    LoginPage.enterUsername('');
    LoginPage.enterPassword('any_password');
    LoginPage.clickLogin();

    LoginPage.errorMessage
      .should('be.visible')
      .and('contain.text', 'Username is required');
  });

  it('Mostra errore se il campo password è vuoto', () => {
    LoginPage.enterUsername('standard_user');
    LoginPage.enterPassword('');
    LoginPage.clickLogin();

    LoginPage.errorMessage
      .should('be.visible')
      .and('contain.text', 'Password is required');
  });

  it('Mostra errore se entrambi i campi sono vuoti', () => {
    LoginPage.enterUsername('');
    LoginPage.enterPassword('');
    LoginPage.clickLogin();

    LoginPage.errorMessage
      .should('be.visible')
      .and('contain.text', 'Username is required'); // di solito mostra prima l'username
  });

});
