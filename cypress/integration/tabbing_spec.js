/* global cy */
describe('tabbing', ()=> {
  it('should tab to next input', ()=> {
    cy.visit('http://localhost:4000')
    cy.focused().should('have.id', 'thing-1')
    try {
      cy.tab()
    } catch (e) {
      console.error(e)
    }
    cy.focused().should('have.id', 'thing-2')
  })
})