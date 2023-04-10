///<refernces types="cypress"/>

it('Assertions', function(){

cy.visit("https://example.cypress.io/")
cy.wait(2000)
cy.contains('get').click()
cy.get('#query-btn').and('contain', 'Button')
cy.get('#query-btn').and('have.class', 'query-btn btn btn-primary')
cy.get('#query-btn').and('be.visible')
//cy.get('#query-btn').should('be.disabled')
cy.get('#query-btn').and('be.enabled')
expect(true).to.be.true
//expect(true).to.be.false : fail assertion


assert.notEqual(3, 4, 'Not equal')









})