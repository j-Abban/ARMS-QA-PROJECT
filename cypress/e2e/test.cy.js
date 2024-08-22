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

        // Add items to the cart and capture their prices
        inventoryPage.addItemToCartByIndex(0);
        inventoryPage.verifyCartCount('1');
        inventoryPage.addItemToCartByIndex(1);
        inventoryPage.verifyCartCount('2');
        inventoryPage.addItemToCartByIndex(2);
        inventoryPage.verifyCartCount('3');

        // Go to cart
        inventoryPage.goToCart();

        // Verify items in the cart
        cy.then(function () {
            cartPage.verifyItemsInCart([this.itemPrice0, this.itemPrice1, this.itemPrice2]);
        });

        // Remove the third item from the cart and verify
        cartPage.removeItemByIndex(2);
        cartPage.verifyCartCount('2');

        // Proceed to checkout
        cartPage.proceedToCheckout();

        // Fill in checkout form
        checkoutPage.fillCheckoutForm('John', 'Doe', '12345');
        checkoutPage.continueCheckout();

        // Calculate expected total (sum of remaining item prices + tax)
        cy.then(function () {
            const itemPrices = [parseFloat(this.itemPrice0.replace('$', '')), parseFloat(this.itemPrice1.replace('$', ''))];
            const totalItemPrice = itemPrices.reduce((sum, price) => sum + price, 0);
            const taxRate = 0.08; // Assuming 8% tax for example
            const expectedTotal = (totalItemPrice * (1 + taxRate)).toFixed(2);

            // Verify total amount
            checkoutPage.verifyTotalAmount(`$${expectedTotal}`);
        });

        // Finish the checkout
        checkoutPage.finishCheckout();

        // Verify order success
        checkoutPage.verifyOrderSuccess();

        // Verify cart is empty
        checkoutPage.verifyCartIsEmpty();
    });
});
