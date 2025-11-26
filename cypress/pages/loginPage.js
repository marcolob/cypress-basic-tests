class LoginPage {
  // Getters
  get usernameInput() { return cy.get('#user-name'); }
  get passwordInput() { return cy.get('#password'); }
  get loginButton() { return cy.get('#login-button'); }
  get errorMessage() { return cy.get('[data-test="error"]'); }

  // Metodi azioni utente
  enterUsername(username) { this.usernameInput.clear().type(username); }
  enterPassword(password) { this.passwordInput.clear().type(password); }
  clickLogin() { this.loginButton.click(); }

  // Metodo comodo per login completo
  login(username, password) {
    this.enterUsername(username);
    this.enterPassword(password);
    this.clickLogin();
  }
}

// Esportiamo un'istanza pronta all'uso
export default new LoginPage();
