describe('Hello World Test', () => {
    it('Visita Google e controlla il titolo', () => {
      cy.visit('https://www.google.com')
      cy.title().should('include', 'Google')
    })
  })
  