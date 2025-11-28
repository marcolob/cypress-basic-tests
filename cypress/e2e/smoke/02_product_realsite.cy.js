import LoginPage from '../../pages/LoginPage';
import ProductsPage from '../../pages/ProductsPage';
import CartPage from '../../pages/CartPage';

describe('Add to Cart / Product Smoke Test - SauceDemo', () => {

  beforeEach(() => {
    cy.visit('/');
    LoginPage.login('standard_user', 'secret_sauce');
    cy.url().should('include', '/inventory.html');
  });

  it('Add specific products to cart and verify cart badge', () => {
    // Add products using data-test
    CartPage.addProductByDataTest('add-to-cart-sauce-labs-backpack');
    CartPage.addProductByDataTest('add-to-cart-sauce-labs-bike-light');

    // Check cart badge
    CartPage.getCartCount().should('contain.text', '2');

    // Open cart
    CartPage.openCart();

    // Verify products in the cart
    CartPage.getItemNames().then(names => {
      expect(names).to.include.members([
        'Sauce Labs Backpack',
        'Sauce Labs Bike Light'
      ]);
      expect(names).to.have.length(2);
    });
  });

});
