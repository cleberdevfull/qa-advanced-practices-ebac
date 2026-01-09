// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('Login', (email, password) => {
  cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' })
  cy.visit('/');

  cy.get('[href="/Tab/Account"]').contains('Profile').click();
  cy.get('[data-testid="email"]').type(email);
  cy.get('[data-testid="password"]').type(password);
  cy.get('[data-testid="btnLogin"]').click();

});

Cypress.Commands.add('searchItemPage', () => {
  cy.get('[data-testid="search-products"]').click();
  cy.get('[data-testid="searchInput"]').type('lapis');
  cy.wait(2000);
  cy.get('[data-testid="productDetails"]').contains('lapis').click({ force: true });
  cy.get('[data-testid="addToCart"]').contains('Add To Cart').click();
});

Cypress.Commands.add('continueToCheckout', () => {
  cy.get('[data-testid="productName"]').should('have.text', 'lapis');
  cy.get('[data-testid="productName"]').should('be.visible');
  cy.get('div[tabindex="0"]').eq(37).click();
});

Cypress.Commands.add('validateAddressData', () => {
  cy.get('[data-testid="addressName"]').as('Address Name').should('be.visible');
  cy.get('[data-testid="address"]').as('Address').should('be.visible');
  cy.get('[style="width: 700px;"] > [data-testid="location"]').as('Location').should('be.visible');

});

Cypress.Commands.add('validatePriceDetails', () => {
  cy.get('[data-testid="price"]').as('Price').should('be.visible');
  cy.get('[data-testid="deliveryFee"]').as('Delivery Fee').should('be.visible');
  cy.get('[data-testid="discount"]').as('Discount').should('be.visible');
  cy.get('[data-testid="total"]').as('Total Amount').should('be.visible');
  cy.get('[data-testid="selectAddressOrContinueToPayment"] > .css-146c3p1').as('Continue to Payment').click();
});

Cypress.Commands.add('paymentPage', () => {
  cy.wait(1000);
  cy.get('#root').contains('Payment Option').as('Payment Option').should('be.visible');
  cy.get('[data-testid="option-1"] > [style="flex-direction: row;"] > :nth-child(2) > .css-146c3p1').as('Payment Option').click();
  cy.get(':nth-child(2) > .r-1d7mnkm').as('Price Details').should('contain', 'Price Details');
  cy.get('.r-6gyv0n > [data-testid="total"]').should('be.visible');
  cy.wait(1000);
  cy.get('[data-testid="completeCheckout"]').click();
});

Cypress.Commands.add('orderConfirmation', () => {
  cy.get('#root').contains('Order Success').as('Order Success').should('be.visible');
}
);
