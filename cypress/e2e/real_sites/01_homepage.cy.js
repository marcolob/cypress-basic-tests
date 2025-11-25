import LoginPage from '../../pages/loginPage';

describe('Login Page Tests', () => {

  beforeEach(() => {
    // Arrange: visit login page
    LoginPage.visit();
  });

  it('should display login form correctly', () => {
    // Assert: check all elements exist
    LoginPage.usernameInput().should('be.visible');
    LoginPage.passwordInput().should('be.visible');
    LoginPage.loginButton().should('be.visible');
  });

  it('should show error message on invalid credentials', () => {
    // Act: enter invalid credentials
    LoginPage.enterUsername('invalid_user');
    LoginPage.enterPassword('invalid_pass');
    LoginPage.clickLogin();

    // Assert: error message is visible
    LoginPage.errorMessage()
        .should('be.visible')
        .and('contain.text', 'Epic sadface: Username and password do not match any user in this service');
  });

});
