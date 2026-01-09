class profilePage {
    get profilePageButton() {return cy.get('a[href="/Tab/Account"]').contains('Profile');}
    
        profilePageClickButton() {
        this.profilePageButton.click();
    }   
}
module.exports = new profilePage();