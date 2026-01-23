/// <reference types="cypress" />
const { email, password } = require('../fixtures/dataLogin.json');

describe('Intercept suit test', () => {

    it('Intercept categories', () => {
        
        cy.Login(email, password);
        cy.interceptSearchItem_1();
        cy.interceptSearchItem_2();
        cy.interceptCart();
        cy.interceptCartAddQuantity();
        cy.interceptCartRemoveQuantity();
        
    });
     
});
