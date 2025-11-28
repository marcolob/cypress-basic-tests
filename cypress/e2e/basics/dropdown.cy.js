// cypress/e2e/basics/dropdown.cy.js
import ProductsPage from '../../pages/ProductsPage';

describe('Product Sorting - Dropdown Filters', () => {

  beforeEach(() => {
    // 🔹 Login base (semplice e leggibile per portfolio)
    cy.visit('/');
    cy.get('[data-test=username]').type('standard_user');
    cy.get('[data-test=password]').type('secret_sauce');
    cy.get('[data-test=login-button]').click();

    cy.url().should('include', '/inventory.html');
  });

  it('should sort products by Price: Low to High using the Page Object', () => {
    // 🔹 Step: seleziona "Price (low to high)"
    ProductsPage.selectSortOption('lohi');

    // 🔹 Verifica: primo prodotto deve essere il più economico
    ProductsPage.productTitle().first().should('contain', 'Sauce Labs Onesie');

    // 🔹 Verifica aggiuntiva: prezzo corretto (base portfolio)
    ProductsPage.productPrice().first().should('contain', '7.99');
  });
});
