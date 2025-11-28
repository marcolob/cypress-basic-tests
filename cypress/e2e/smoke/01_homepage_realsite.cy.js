// cypress/e2e/Realsite_SmokeTest/01_homepage.realsite.cy.js
import LoginPage from '../../pages/LoginPage';

describe('Homepage Smoke Test - SauceDemo', () => {

  beforeEach(() => {
    // Apri la homepage prima di ogni test
    cy.visit('/');
  });

  it('Dovrebbe mostrare correttamente il form di login', () => {
    // Verifica visibilità campi login usando Page Object
    LoginPage.usernameInput.should('be.visible');
    LoginPage.passwordInput.should('be.visible');
    LoginPage.loginButton.should('be.visible');

    // Controllo aggiuntivo: messaggi di errore non presenti all’inizio
    LoginPage.errorMessage.should('not.exist');
  });

});
