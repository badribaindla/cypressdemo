describe('DemoSuite', function()
{
    it('landingpage',function()
    {
    cy.visit('https://go.edmodo.com/teachers/')
    cy.title().should('eq','Teachers - Edmodo')
    cy.get(".fusion-button-text").type("Teacher Account")
    })

  })