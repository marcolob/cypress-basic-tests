import LoginPage from '../../pages/loginPage';
import ProductsPage from '../../pages/productsPage';

describe('Product Page Tests', () => {

  beforeEach(() => {
    // Arrange: login first
    LoginPage.visit();
    LoginPage.enterUsername('standard_user');
    LoginPage.enterPassword('secret_sauce');
    LoginPage.clickLogin();
  });

  it('should display product titles', () => {
    // Assert: at least one product is visible
    ProductsPage.productTitle().should('have.length.greaterThan', 0);
  });

  it('should add a product to the cart', () => {
    // Act: add first product to cart
    ProductsPage.productTitle().first().then(($el) => {
      const productName = $el.text();
      ProductsPage.addProductToCart(productName);

      // Assert: cart badge shows 1
      ProductsPage.shoppingCartLink().should('contain.text', '1');
    });
  });

});
