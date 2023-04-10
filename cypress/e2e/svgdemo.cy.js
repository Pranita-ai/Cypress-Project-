///<refernces types="cypress"/>

it('Assertions', function(){

    cy.visit("https://newshop.order-line.co.uk/")
    cy.get('.step6 > ish-login-status > .nav-icon > .icon > .menubelowtext').click()

    cy.get('.list > :nth-child(1) > .btn').click()
    cy.get('#\39 ba4c576-2c5a-9679-c528-0ec993150a91').click().type('test@spacestem.com')


})