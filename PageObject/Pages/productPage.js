// PageObject/Pages/productPage.js
class ProductPage{
    get cartCount() {
        return cy.get('.shopping_cart_badge');
    }

    get addToCartButton(){
        return cy.get('.btn_inventory');
    }

    get cartLink() {
        return cy.get('.shopping_cart_link');
    }

    get checkoutButton(){
        return ct.get('.inventory_item_price');
    }

    get continueButton() {
        return cy.get('.cart_Button');
    }

    get removeButtons(){
        return cy.get('.cart_button');
    }

    addFirstThreeItemsToCart() {
        this.addToCartButtons.each((button, index) => {
            if(index < 3) {
                cy.wrap(button).click();
            }
        });
    }

    goToCart(){
        this.cartLink.click();
    }

    checkout() {
        this.checkoutButton.click();
    }
}

export default new ProductPage();