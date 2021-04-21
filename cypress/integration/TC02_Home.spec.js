/// <reference types="Cypress" />
describe('homePage', function(){
    before( ()=>{
        cy.logIn()
      })

    it('select',function(){
       // cy.get('.active > .nav-link').click()
        
       cy.get('#navbarExample > ul > li.nav-item.active > a').click({force:true})
       cy.wait(1000)
      // cy.get('#navbarExample > ul > li.nav-item.active > a').should('have.attr','href="index.html"').click()
        cy.get('#itemc').contains('Phones').click()
        //cy.get('.hrefch').should('have.attr','href','prod.html?idp_=1').click({multiple:true})
        cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
        cy.get('.col-sm-12 > .btn').contains('Add to cart').click()
        //cy.on('window:confirm', () => true)
        cy.on("window:alert", (str) => {
          //window:alert is the event which get fired on alert open
            expect(str).to.equal("I am alert");
          cy.get('[name="alert"]').click();
          })
       // cy.get('div.list-group>a.list-group-item').eq(2).click()
        

    })



})