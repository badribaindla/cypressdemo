describe('DemoSuite', function()
{
    it('landingpage',function()
    {
    cy.visit('https://new.edmodoqabranch.com/')
    cy.title().should('eq','Edmodo')
    })

  })