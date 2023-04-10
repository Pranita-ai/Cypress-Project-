///<refernces types="cypress"/>

beforeEach(function(){  // beforeEach outside describe block

    cy.visit("https://demoqa.com/")

})

describe('All TC', function(){

    

    it('Test 1', function(){

        
        cy.get(':nth-child(1) > :nth-child(1) > .card-body > h5').click()
    })
    
    it('Test 2', function(){
        
        cy.get(':nth-child(2) > :nth-child(1) > .card-body').click()
    })
    
   

})
it('Test 3', function(){
    
        
    cy.get(':nth-child(3) > :nth-child(1) > .card-body > h5').click()
})

