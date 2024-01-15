describe('template spec', () => {
  it('Verify user able to login with valid credential', () => {
    cy.visit('/web/index.php/auth/login')
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123{enter}')
    cy.url().should('include', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

  })
  it('Verify user able to login with invalid credential', () => {
    cy.visit('/web/index.php/auth/login')
    cy.get('input[name="username"]').type('Adminchandru')
    cy.get('input[name="password"]').type('admin123{enter}')
    cy.contains('Invalid credentials').should('be.visible')

  })
  it('Verify user able to login with invalid credential', () => {
    cy.visit('/web/index.php/auth/login')
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123chandru{enter}')
    cy.contains('Invalid credentials').should('be.visible')
  })



})