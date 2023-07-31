describe('CSS Locators', () => {
    it("csslocators", () => {
        cy.visit("www.amazon.in")

        cy.get(".nav-search-field").type("T-shirts")
        cy.get("#nav-search-submit-button").click()
        cy.get(".a-section").contains("T-shirts")
    })
})