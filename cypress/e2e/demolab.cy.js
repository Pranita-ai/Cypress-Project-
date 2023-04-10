///<refernces types="cypress"/>



it('Google Search', function(){




    cy.visit("https://www.demoblaze.com/")
    cy.get('#login2').click()
    cy.wait(3000)
    cy.get('#loginusername').type("cypress_test")
    cy.get('#loginpassword').type('test123')
    cy.wait(2000)
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.get(':nth-child(2) > .nav-link').click()   
    cy.get('#recipient-email').click().type("test@gmail.com")
    cy.get('#recipient-name').click().type("123456")
    cy.get('#message-text').type("Don't stop Learning")
    cy.wait(2000)
    cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.get(':nth-child(3) > .nav-link').click()
    cy.get('.vjs-poster').click()
    cy.wait(2000)
    cy.get('#videoModal > .modal-dialog > .modal-content > .modal-footer > .btn').click()
    cy.get(':nth-child(4) > .nav-link').click()
    cy.get('.col-lg-1 > .btn').click()
    cy.get('#name').type("Pranit")
    cy.get('#country').type("India")
    cy.get('#city').type("Pune")
    cy.get('#card').click().type("Y8923237")
    cy.get('#month').click().type("November")
    cy.get('#year').click().type("2023")
    cy.wait(2000)
    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.wait(2000)
    cy.get('.confirm').click()
    cy.get('.carousel-control-prev-icon').click()
    cy.wait(2000)
    cy.contains('Monitors').click()
    cy.contains('Laptops').click()
    cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
    cy.wait(2000)
    cy.get('.col-sm-12 > .btn').click()
    cy.get('#cartur').click()
    cy.get('.col-lg-1 > .btn').click()
    cy.get('#name').type("Shree")
    cy.get('#country').type("India")
    cy.get('#city').type("Pune")
    cy.get('#card').type("QASJ123")
    cy.get('#month').type("June")
    cy.get('#year').type("2023")
    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.get('.confirm').click()
    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-header > .close > span').click()

   
    //cy.get('#nava').click()





})