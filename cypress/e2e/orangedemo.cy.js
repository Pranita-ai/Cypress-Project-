///<refernces types="cypress"/>



it('Google Search', function(){

  cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
  cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
  cy.get('.oxd-button').click()
  //cy.wait(3000)
  cy.get(':nth-child(6) > .oxd-main-menu-item').click()
  cy.get(':nth-child(1) > .oxd-grid-3 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').click()
  cy.wait(3000)
  cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').click().type("Pranita")
  cy.wait(3000)

   
  //cy.get(':nth-child(6) > .oxd-main-menu-item > .oxd-text').click
})