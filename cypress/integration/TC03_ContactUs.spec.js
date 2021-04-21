/// <reference types="Cypress" />
describe('ContactUS', function(){
    before( ()=>{
        // cy.logIn()
      })
    
      it('ContactUS',function(){
        cy.logIn()
        cy.wait(2000)
        cy.get('div#navbarExample>ul>li.nav-item').eq(1).then((eleLi) => {
           cy.wrap(eleLi).children('a').click({force:true})
        cy.get('#recipient-email').click().type('nida@gmail.com')
        cy.get('#recipient-name').click().type('NidaNaaz')
        cy.get('#message-text').click().type('your website is cool')
        cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        })
    })
})