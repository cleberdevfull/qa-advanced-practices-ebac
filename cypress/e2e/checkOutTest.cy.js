/// <reference types="cypress" />
const { email, password } = require('../fixtures/dataLogin.json')


describe('CheckOut test with App Actions', () => {

  it.only('Check out validation - App Actions', () => {
    cy.Login(email, password);
    cy.searchItemPage();
    cy.validateAddressData();
    cy.validatePriceDetails();
    cy.paymentPage();
    cy.orderConfirmation();

  })
});
