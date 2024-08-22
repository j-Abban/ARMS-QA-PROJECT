class CheckoutPage {
    fillCheckoutForm(firstName, lastName, postalCode) {
        cy.get('#first-name').type(firstName);
        cy.get('#last-name').type(lastName);
        cy.get('#postal-code').type(postalCode);
    }

    continueCheckout() {
        cy.get('.cart_button').click();
    }

    verifyFieldValidation() {
        cy.get('.error-message-container').should('be.visible');
    }

    verifyTotalAmount(expectedTotal) {
        cy.get('.summary_total_label').should('have.text', `Total: ${expectedTotal}`);
    }

    finishCheckout() {
        cy.get('.cart_button').click();
    }

    verifyOrderSuccess() {
        cy.get('.complete-header').should('contain.text', 'THANK YOU FOR YOUR ORDER');
    }

    verifyCartIsEmpty() {
        cy.get('.shopping_cart_badge').should('not.exist');
    }
}

export default CheckoutPage;
