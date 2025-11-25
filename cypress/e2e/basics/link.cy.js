// 2. Test link
describe('Test Link', () => {
    it('Clicca sul link "type" e verifica URL', () => {
      cy.visit('https://example.cypress.io')
      cy.contains('type').click()
      cy.url().should('include', '/commands/actions')
    })
  })