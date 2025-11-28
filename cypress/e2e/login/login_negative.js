import LoginPage from '../../pages/LoginPage';

describe('Login Negativo', () => {

  beforeEach(() => {
    // Visita la pagina di login prima di ogni test
    cy.visit('/');
  });

  it('Mostra errore con username e password sbagliati', () => {
    // Inserisce credenziali errate
    LoginPage.enterUsername('wrong_user');
    LoginPage.enterPassword('wrong_password');
    LoginPage.clickLogin();

    // Verifica messaggio di errore
    LoginPage.errorMessage
      .should('be.visible')
      .and('contain.text', 'Username and password do not match any user in this service');
  });

  it('Mostra errore se il campo username è vuoto', () => {
    // Campo username vuoto
    LoginPage.enterUsername('');
    LoginPage.enterPassword('any_password');
    LoginPage.clickLogin();

    // Verifica messaggio di errore
    LoginPage.errorMessage
      .should('be.visible')
      .and('contain.text', 'Username is required');
  });

  it('Mostra errore se il campo password è vuoto', () => {
    // Campo password vuoto
    LoginPage.enterUsername('standard_user');
    LoginPage.enterPassword('');
    LoginPage.clickLogin();

    // Verifica messaggio di errore
    LoginPage.errorMessage
      .should('be.visible')
      .and('contain.text', 'Password is required');
  });

  it('Mostra errore se entrambi i campi sono vuoti', () => {
    // Entrambi i campi vuoti
    LoginPage.enterUsername('');
    LoginPage.enterPassword('');
    LoginPage.clickLogin();

    // Verifica messaggio di errore (SwagLabs richiede prima lo username)
    LoginPage.errorMessage
      .should('be.visible')
      .and('contain.text', 'Username is required');
  });

});
