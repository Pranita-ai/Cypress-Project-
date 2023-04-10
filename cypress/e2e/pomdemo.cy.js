

import LoginPage from "./Page/login_page.js"

const loginpage=new LoginPage()


it('POM Demo', function(){

    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    loginpage.enterUserName('Admin')
    loginpage.enterPassword(123)
    loginpage.clickLogin()
    loginpage.clikcdirectory()
    loginpage.enterEmpname()


    // cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    // cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
    // cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
    // cy.get('.oxd-button').click()



})