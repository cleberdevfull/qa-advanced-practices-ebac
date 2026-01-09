class confirmSignUpPage {
    get profilePage() { return cy.get('#root'); }
    get confirmationName() { return cy.get('[data-testid="CustomerName"]'); }
    get confirmationCustomerPhone() { return cy.get('[data-testid="CustomerPhone"]'); }
    get confirmationCustomerEmail() { return cy.get('[data-testid="CustomerEmail"]'); }

    confirmSignUp(userData) {
        this.profilePage.should('contain.text', 'Profile');
        this.confirmationName.should('contain.text', userData.lastName + ' ' + userData.firstName);
        this.confirmationCustomerPhone.should('contain.text', userData.phone);
        this.confirmationCustomerEmail.should('contain.text', userData.email);
    }
 
};
    module.exports = new confirmSignUpPage();