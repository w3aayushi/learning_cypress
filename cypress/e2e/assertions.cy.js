describe("Assertions demo", () => {
    it('Implicit Assertions', () => {
        cy.visit("https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test")

        // cy.url().should('include','guides')

        //cy.url().should('eq',"https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test")

        //cy.url().should('contain','guides')

        // cy.url("https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test")
        // .should('include','guides')
        // .should('include','https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test')

        // cy.url("https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test")
        // .should('include','guides')
        // .and('eq',"https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test")
        // .and('contain', 'guides')
        // .and('not.contain', 'uides')

        // cy.get(':nth-child(5) > .medium-zoom-image').should('be.visible')
        // .and('exist')


    })
    it("Explicit Assertions", () => {
        cy.visit("https://gitlab.com/users/w3aayushi/activity")

        let expName ='\nAayushi W3Dev\n';
        cy.get('.cover-title').then( (x)=>{
            let actName = x.text()

            //BDD style
            expect(actName).to.equal(expName)
            expect(actName).to.not.equal(expName)

            //TDD Style
            assert.equal(actName,expName)
            assert.notEqual(actName,expName)

        })

        
    })
})