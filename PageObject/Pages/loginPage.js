// PageObject/Pages/loginPage.js

class Login{
    visit() {
        cy.visit('https://www.saucedemo.com/');
    }

    get usernameInput() {
        return cy.get('#username');
    }

    get passwordInput() {
        return cy.get('#password');
    }

    get loginButton() {
       return cy.get('#login-button');
    }

    login(username, password) {
        this.usernameInput.type(username);
        this.passwordInput.type(password);
        this.loginButton.click();
    }
}

export default Login;