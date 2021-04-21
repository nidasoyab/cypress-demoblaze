// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("logIn", ()=>{
    
    cy.visit("https://www.demoblaze.com/")
    
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
    cy.get('#logInModal > div > div > div.modal-footer > button.btn.btn-primary').contains('Log in').click()
   
   
  })