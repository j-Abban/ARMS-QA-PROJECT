// PageObject/Pages/cartPage.js
class CartPage {
    get itemPrices() {
        return cy.get('.cart_item .inventory_item_price');
    }

    get removeButtons() {
        return cy.get('.cart_item .cart_button');
    }

    get checkoutButton() {
        return cy.get('.checkout_button');
    }

    get cartItems() {
        return cy.get('.cart_item');
    }

    get itemCount() {
        return cy.get('.cart_item').its('length');
    }

    get cartBadge() {
        return cy.get('.shopping-cart_badge');
    }

    removeThirdItem() {
        this.removeButtons.eq(2).click();
    }
}

export default CartPage();