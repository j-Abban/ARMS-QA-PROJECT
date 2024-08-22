import LoginPage from '../../PageObject/Pages/loginPage';
import InventoryPage from '../../PageObject/Pages/inventoryPage';
import CartPage from '../../PageObject/Pages/cartPage';
import CheckoutPage from '../../PageObject/Pages/checkoutPage';

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();
const cartPage = new CartPage();
const checkoutPage = new CheckoutPage();

describe('SauceDemo E2E Test', () => {
    it('should perform a full checkout process', () => {
        loginPage.visit();
        loginPage.enterUsername('standard_user');
        loginPage.enterPassword('secret_sauce');
        loginPage.clickLogin();

        inventoryPage.addItemToCartByIndex(0);
        inventoryPage.verifyCartCount('1');
        inventoryPage.addItemToCartByIndex(1);
        inventoryPage.verifyCartCount('2');
        inventoryPage.addItemToCartByIndex(2);
        inventoryPage.verifyCartCount('3');

        inventoryPage.goToCart();

        cy.then(function () {
            cartPage.verifyItemsInCart([this.itemPrice0, this.itemPrice1, this.itemPrice2]);
        });

        cartPage.removeItemByIndex(2);
        cartPage.verifyCartCount('2');

        cartPage.proceedToCheckout();

        checkoutPage.fillCheckoutForm('John', 'Doe', '12345');
        checkoutPage.continueCheckout();

        checkoutPage.verifyTotalAmount('$XX.XX'); // Calculate this based on prices + tax

        checkoutPage.finishCheckout();

        checkoutPage.verifyOrderSuccess();
        checkoutPage.verifyCartIsEmpty();
    });
});
