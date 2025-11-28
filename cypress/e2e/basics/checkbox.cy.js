// cypress/e2e/basics/checkbox.cy.js
import ProductsPage from '../../pages/ProductsPage';

describe('Product Sorting - Price Low to High (PO Example)', () => {

  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-test=username]').type('standard_user');
    cy.get('[data-test=password]').type('secret_sauce');
    cy.get('[data-test=login-button]').click();
    cy.url().should('include', '/inventory.html');
  });

  it('should correctly show lowest price first when sorting Low → High', () => {
    // 🔹 Selezione filtro dal dropdown
    ProductsPage.selectSortOption('lohi');

    // 🔹 Verifica: il primo prodotto deve essere quello da $7.99
    ProductsPage.productPrice().first().should('contain', '7.99');

    // 🔹 Verifica opzionale: titolo del prodotto
    ProductsPage.productTitle().first().should('contain', 'Sauce Labs Onesie');
  });
});
