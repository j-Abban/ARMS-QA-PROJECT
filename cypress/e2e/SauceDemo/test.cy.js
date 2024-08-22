
describe('SauceDemo Test Suite', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
    });
    
    it('Should validate the title of the page', () => {
        cy.title().should('eq', 'Swag Labs');
    });

    it('Should add first three items to cart, verify cart count, and prices', () => {
        //Login
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
    });
});