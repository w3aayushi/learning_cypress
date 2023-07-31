describe('My first test', () => {
    it('verify title-positive', () => {
        cy.visit("www.google.com")
        cy.title().should('eq','Google')
    })
    it('verify title-negative', () => {
        cy.visit("www.google.com")
        cy.title().should('eq','gooogleee')
    })
})