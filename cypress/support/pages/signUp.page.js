class signUpPage {
    
    get firstName() { return cy.get('[data-testid="firstName"]'); }
    get lastName() { return cy.get('[data-testid="lastName"]'); }
    get #phone() { return cy.get('[data-testid="phone"]'); }
    get #email() { return cy.get(':nth-child(7) > .css-175oi2r > [data-testid="email"]'); }
    get #password() { return cy.get(':nth-child(8) > .css-175oi2r > [data-testid="password"]'); }
    get #repassword() { return cy.get('[data-testid="repassword"]'); }
    get signUpButton() { return cy.get('[data-testid="signUp"] > .css-146c3p1'); }
    get createButton() { return cy.get('[data-testid="create"] > .css-146c3p1'); }

    clickSignUpButton() {
        this.signUpButton.click();
    }

    fillSignUpForm(firstName, lastName, phone, email, password, repassword) {
        this.firstName.type(firstName);
        this.lastName.type(lastName);
        this.#phone.type(phone);
        this.#email.type(email);
        this.#password.type(password);
        this.#repassword.type(repassword);
        this.createButton.click();
    }

}

  module.exports = new signUpPage();
