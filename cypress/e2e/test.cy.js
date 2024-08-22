// PageObject/Pages/test.cy.js
 import Login from "../../../PageObject/Pages/loginPage";
 import cartPage from "../../../PageObject/pages/cartPage";
 import checkoutOverviewPage from "../../../PageObject/Pages/checkoutOverviewPage";
 import checkoutPage from "../../../PageObject/pages/checkoutPage";




const login = new Login();
const productPage = new productPage();
const checkoutPage = new checkoutPage();
const checkoutOverview = new checkoutOverviewPage();
const cartPage = new cartPage();

describe('SauceDemo E2E Test', () => {

    beforeEach(() => {
       
        login.visit('https://www.saucedemo.com/');
        login.login('standard_user', 'secret_sauce');
    });

    it('should add first three items to the cart and verify the cart count', () => {
        
        productPage.addFirstThreeItemsToCart();

       
        productPage.cartCount.should('have.text', '3');

      
        productPage.goToCart();

        
        cartPage.itemPrices.should('have.length', 3);
    });

    it('should remove the third item from the cart and verify cart count', () => {
        
        ProductPage.addFirstThreeItemsToCart();
        ProductPage.goToCart();

        CartPage.removeThirdItem();

        CartPage.itemPrices.should('have.length', 2);

        
        CartPage.cartBadge.should('have.text', '2');
    });

    it('should checkout, fill the form, and verify validation and prices', () => {
      
        ProductPage.addFirstThreeItemsToCart();
        ProductPage.goToCart();
        CartPage.checkoutButton.click();

       
        CheckoutPage.fillCheckoutForm('John', 'Doe', '12345');

       
        CheckoutPage.continueButton.should('be.visible');

        
        CheckoutOverviewPage.itemPrices.then($prices => {
            const totalItemPrice = $prices.toArray().reduce((sum, price) => sum + parseFloat(price.innerText.replace('$', '')), 0);
            CheckoutOverviewPage.totalPrice.should('have.text', `$${totalItemPrice.toFixed(2)}`);
        });

        
        CheckoutOverviewPage.taxAmount.then($tax => {
            const tax = parseFloat($tax.text().replace('Tax: $', ''));
            CheckoutOverviewPage.totalAmount.should($totalAmount => {
                const totalAmount = parseFloat($totalAmount.text().replace('Total: $', ''));
                const expectedTotal = totalItemPrice + tax;
                expect(totalAmount).to.eq(expectedTotal);
            });
        });

        
        CheckoutOverviewPage.finishOrder();

        
        CheckoutOverviewPage.finishButton.should('not.exist');

       
        CheckoutOverviewPage.cartBadge.should('not.exist');
    });
});
