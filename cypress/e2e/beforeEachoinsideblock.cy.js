///<refernces types="cypress"/>

describe('All TC', function(){

    beforeEach(function(){  // beforeEach inside describe block

        cy.visit("https://demoqa.com/")
    
    })

    it('Test 1', function(){

        
        cy.get(':nth-child(1) > :nth-child(1) > .card-body > h5').click()
    })
    
    it('Test 2', function(){
        
        cy.get(':nth-child(2) > :nth-child(1) > .card-body').click()
    })
    
    it('Test 3', function(){
    
        
        cy.get(':nth-child(3) > :nth-child(1) > .card-body > h5').click()
    })
    it('Test 4', function(){

        cy.wait(2000)
    
        
        cy.get(':nth-child(3) > .element-list > .menu-list > #item-0 > .text').click()
    })

})

