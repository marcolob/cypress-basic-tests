import LoginPage from '../../pages/loginPage';
import ProductsPage from '../../pages/productsPage';
import CartPage from '../../pages/cartPage';

describe('Add to Cart Flow', () => {

  beforeEach(() => {
    // Arrange: login and go to products
    LoginPage.visit();
    LoginPage.enterUsername('standard_user');
    LoginPage.enterPassword('secret_sauce');
    LoginPage.clickLogin();
  });

  it('should add multiple products to the cart', () => {
    const products = ['Sauce Labs Backpack', 'Sauce Labs Bike Light'];

    // Act: add products
    products.forEach(product => ProductsPage.addProductToCart(product));
    ProductsPage.goToCart();

    // Assert: all products are in the cart
    products.forEach(product => CartPage.verifyProductInCart(product));
  });

});
