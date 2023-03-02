///<refernce types="cypress"/>

it ('Google search', function(){

    cy.visit("https://www.youtube.com/")
    cy.get(':nth-child(2) > #text').click();
    cy.get('#search-input > #search').type('Git tutorials')
    cy.get('#search-icon-legacy > yt-icon.style-scope').click();

    
})