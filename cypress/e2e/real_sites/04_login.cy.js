import LoginPage from '../../pages/loginPage';

describe('Login Flow', () => {

  it('should login successfully with valid credentials', () => {
    // Arrange: visit login page
    LoginPage.visit();

    // Act: login with valid credentials
    LoginPage.enterUsername('standard_user');
    LoginPage.enterPassword('secret_sauce');
    LoginPage.clickLogin();

    // Assert: URL includes /inventory.html
    cy.url().should('include', '/inventory.html');
  });

});
