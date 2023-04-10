export default class LoginPage{
    
    enterUserName(){
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")


    }

enterPassword(){
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")

}

clickLogin(){
    cy.get('.oxd-button').click()



}

clikcdirectory()
{

    cy.get(':nth-child(9) > .oxd-main-menu-item > .oxd-text').click()
}

enterEmpname()
{

    cy.get(':nth-child(7) > .oxd-main-menu-item').click()
}
}