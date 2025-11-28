// cypress/e2e/Realsite_SmokeTest/checkbox.realsite.cy.js
import ProductsPage from '../../pages/ProductsPage';
import LoginPage from '../../pages/LoginPage';

describe('Product Filter Checkbox - Smoke Test', () => {

  beforeEach(() => {
    // Login prima di ogni test
    cy.visit('/');
    LoginPage.login('standard_user', 'secret_sauce');
    cy.url().should('include', '/inventory.html');
  });

  it('Dovrebbe filtrare prodotti usando checkbox o selezioni disponibili', () => {
    // Esempio: selezione filtro "Nome (Z to A)" come test checkbox-like
    // Nota: SauceDemo non ha checkbox reali, simula filtraggio prodotto
    ProductsPage.selectSortOption('za'); // usa PO per dropdown

    // Controllo che il primo prodotto corrisponda all’ordinamento scelto
    ProductsPage.productTitle().first().should('contain.text', 'Test.allTheThings() T-Shirt (Red)');
  });

});
