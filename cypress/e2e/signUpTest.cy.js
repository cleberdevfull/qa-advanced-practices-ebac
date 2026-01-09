/// <reference types="cypress" />
const {firstName, lastName, phone, email, password, repassword} = require('../fixtures/dataSignUp.json');
const profilePageButton  = require('../support/pages/profile.page');
const signUpPage = require('../support/pages/signUp.page');
const confirmSignUpPage = require('../support/pages/confirmSignUp.page');



describe('Sign up test with cookie v2', () => {
  beforeEach(() => {
    cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' })
    cy.visit('/');
  })

  it('Sign up validation - Page Objects', () => {
    profilePageButton.profilePageClickButton();
    signUpPage.clickSignUpButton();
    signUpPage.fillSignUpForm(firstName, lastName, phone, email, password, repassword)
    profilePageButton.profilePageClickButton()
    confirmSignUpPage.confirmSignUp({firstName, lastName, phone, email});
  })

})