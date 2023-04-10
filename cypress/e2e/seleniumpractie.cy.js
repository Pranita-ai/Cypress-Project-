///<refernces types="cypress"/>


describe('All TC', function(){ // describe will contain all tc in one folder 

beforeEach(function(){

    cy.visit("https://demoqa.com/")

})


    it('Test 1', function(){

        
        
        cy.get(':nth-child(1) > :nth-child(1) > .card-body > h5').click()
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0 > .text').click()
        cy.get('#userName').click().type("Pranita")
        
    })
    
    it('Test 2', function(){
    
        
        cy.get(':nth-child(1) > :nth-child(1) > .card-body > h5').click()
        
    })


})


// it.only we will use to run only perticular TC

//it.skip is used to skit perticular tc

// beforeEach

// 1) within describe block: Runs before each test in that describe group : beforeEach block: For every tc we need to go on basic url so we will create beforeEach bloack under describe clock & add the tc oinside bloak & that block will execute everytime

// 2) Outside describe : Runs before each test in that spec file 


