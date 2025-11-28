// cypress/e2e/Realsite_SmokeTest/dropdown_realsite.cy.js
import ProductsPage from '../../pages/ProductsPage';
import LoginPage from '../../pages/LoginPage';

describe('Product Filter Dropdown - Smoke Test', () => {

  beforeEach(() => {
    // Login prima di ogni test
    cy.visit('/');
    LoginPage.login('standard_user', 'secret_sauce');
    cy.url().should('include', '/inventory.html');
  });

  it('Dovrebbe selezionare il filtro "Price (low to high)" e controllare il primo prezzo', () => {
    // Seleziona opzione nel dropdown usando Page Object
    ProductsPage.selectSortOption('lohi');

    // Controllo che il primo prezzo sia il più basso
    ProductsPage.productPrice().first().should('contain.text', '7.99');
  });

});
