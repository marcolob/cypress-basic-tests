class LoginPage {
    // Selectors
    usernameInput() { return cy.get('#user-name'); }
    passwordInput() { return cy.get('#password'); }
    loginButton() { return cy.get('#login-button'); }
    errorMessage() { return cy.get('[data-test="error"]'); }

    // Actions
    visit() { cy.visit('https://www.saucedemo.com/'); }
    enterUsername(username) { this.usernameInput().type(username); }
    enterPassword(password) { this.passwordInput().type(password); }
    clickLogin() { this.loginButton().click(); }
}

export default new LoginPage();
