///<reference types="cypress" />

describe('verify the data',()=>{
    it('verify the mobiles names',()=>{
        cy.intercept({
            method:'POST',
            url:"https://api.demoblaze.com/bycat"
        }).as('getRes')
        cy.visit('https://www.demoblaze.com/#')
        cy.get('#itemc').eq(1).click()
        cy.get('@getRes').then(function(res){
            cy.log(res)
        })
    })
})