///<refernces types="cypress"/>

import { name } from "commander"



it('test', function(){

cy.visit('https://www.saucedemo.com/')
cy.get('#user-name').click().type('standard_user')
cy.get('#password').click().type('secret_sauce')
cy.get('#login-button').click()
cy.get('#add-to-cart-sauce-labs-backpack').click()
cy.get('.shopping_cart_link').click()
cy.get('.checkout_button').click()
cy.get('[data-test="firstName"]').click().type('Swami')
cy.get('[data-test="lastName"]').click().type('Samrth')
cy.get('[data-test="postalCode"]').click().type('413304')
cy.get('[data-test=continue]').click()
cy.get('[data-test="finish"]').click()
cy.get('.btn_small').click()
//cy.scrollTo(0, 900)
//cy.get('.product_sort_container').click()
cy.wait(3000)
cy.get('#root').click()





})