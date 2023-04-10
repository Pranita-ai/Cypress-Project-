///<refernces types="cypress"/>
it('Test 1', function(){

    cy.visit("https://admin.staging.springtest.us/admin")
    cy.wait(2000);
    cy.get('[data-cy="sign-in-email-input"]').type("holley_test@springhealth.com")


    })