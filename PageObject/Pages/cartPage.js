class CartPage {
    verifyItemsInCart(expectedItems) {
        cy.get('.cart_item').should('have.length', expectedItems.length);
        expectedItems.forEach((price, index) => {
            cy.get('.cart_item').eq(index).within(() => {
                cy.get('.inventory_item_price').should('have.text', price);
            });
        });
    }

    removeItemByIndex(index) {
        cy.get('.cart_item').eq(index).within(() => {
            cy.get('.cart_button').click();
        });
    }

    verifyCartCount(expectedCount) {
        cy.get('.shopping_cart_badge').should('have.text', expectedCount);
    }

    proceedToCheckout() {
        cy.get('.checkout_button').click();
    }
}

export default CartPage;
