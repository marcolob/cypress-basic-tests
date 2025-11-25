describe('Login Form Test', () => {
  it('Should login with correct credentials', () => {
    cy.visit('cypress/fixtures/login.html');
    cy.get('input[name="username"]').type('admin');
    cy.get('input[name="password"]').type('1234');
    cy.get('button[type="submit"]').click();
    cy.get('.message').should('contain', 'Login successful');
  });

  it('Should show error for wrong credentials', () => {
    cy.visit('cypress/fixtures/login.html');
    cy.get('input[name="username"]').type('user');
    cy.get('input[name="password"]').type('wrong');
    cy.get('button[type="submit"]').click();
    cy.get('.message').should('contain', 'Invalid credentials');
  });
});
