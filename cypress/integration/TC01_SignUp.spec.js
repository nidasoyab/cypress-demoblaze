/// <reference types="Cypress" />
describe('signUp', function(){
    


    it('Visit the URL',function(){
        cy.visit('https://www.demoblaze.com/')
        cy.get('#signin2').click({multiple:true}).contains("Sign up")

        /*
        cy.get('#sign-username').then(($eleUN) => {
            cy.wrap($eleUN).click()
            cy.wrap($eleUN).type('Nida')
        })
        cy.get('#sign-password').then(($elePwd) => {
            cy.wrap($elePwd).click()
            cy.wrap($elePwd).type('Nida123')
        })
        */
        cy.get('#sign-username').click()
        cy.get('#sign-username').invoke('val', 'NidaNaaz')
        cy.get('#sign-password').click()
        cy.get('#sign-password').invoke('val', 'Nida123')

        /*

        cy.get('#sign-username').type('NidaNaaz')
        cy.get('#sign-password').click()
        cy.get('#sign-password').type('Nida123')
        */

        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()

   })

    it('logIn',function(){
        cy.get('#login2').click({force:true})
        /*
        cy.get("#loginusername").click()
        cy.get("#loginusername").type('NidaNaaz')
        cy.get("#loginpassword").click()
        cy.get("#loginpassword").type('Nida123')
        */

        cy.get("#loginusername").click()
        cy.get("#loginusername").invoke('val', 'NidaNaaz')
        cy.get("#loginpassword").click()
        cy.get("#loginpassword").invoke('val', 'Nida123')

        /*
        cy.get('#loginusername').then(($eleUN) => {
            cy.wrap($eleUN).click()
            cy.wrap($eleUN).type('Nida')
        })
        cy.get('#loginpassword').then(($elePwd) => {
            cy.wrap($elePwd).click()
            cy.wrap($elePwd).type('Nida123')
        })
        */


        //cy.get("#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary").click({force:true})
        cy.get('#logInModal > div > div > div.modal-footer > button.btn.btn-primary').click().contains('Log in')
   
   
   
    })





})
