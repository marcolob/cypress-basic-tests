// cypress/e2e/basics/radio.cy.js
describe('Product Sorting - Name Z to A (Radio-like Example)', () => {

  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-test=username]').type('standard_user');
    cy.get('[data-test=password]').type('secret_sauce');
    cy.get('[data-test=login-button]').click();
    cy.url().should('include', '/inventory.html');
  });

  it('should sort products by Name Z → A using dropdown', () => {
    cy.get('.product_sort_container').select('za');

    // 🔹 Verifica: primo prodotto deve essere quello che inizia per "T"
    cy.get('.inventory_item')
      .first()
      .find('.inventory_item_name')
      .should('contain', 'Test.allTheThings() T-Shirt (Red)');
  });
});
