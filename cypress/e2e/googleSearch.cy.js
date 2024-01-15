describe('template spec', () => {
  it('Test Case 1', () => {
    cy.visit('https://www.google.com/webhp')
    cy.get('#APjFqb').type('INDIA{enter}')
    

  })
})