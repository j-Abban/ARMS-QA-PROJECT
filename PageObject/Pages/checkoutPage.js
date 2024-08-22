class CheckoutPage {
    get firstNameInput() {
        return cy.get('#first-name');
    }

    get lastNameInput(){
        return cy.get('#last-name');
    }

    get postalCodeInput(){
        return cy.get('#postal-code');
    }

    get continueButton() {
        return cy.get('.error-message-container');
    }

    fillCheckoutForm(firstName, lastName, postalCode) {
        this.firstNameInput.type(firstName);
        this.lastNameInput.type(lastName);
        this.postalCodeInput.type(postalCode);
        thiscontinueButton.click();
    }
}

export default CheckoutPage();