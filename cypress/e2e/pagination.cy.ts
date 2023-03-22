describe('Pagination', () => {
  it('should display the pagination', () => {
    // visit the home page
    cy.visit('/')

    // check if the component container is visible
    cy.get('#componentContainer').should('be.visible')
  })

  it('should use forward and backward navigation', () => {
    // visit the home page
    cy.visit('/')

    // check if the pagination navigation is visible
    cy.get('.paginate-buttons.next-button').should('be.visible')

    // check if the pagination navigation is visible
    cy.get('.back-button.paginate-buttons').should('be.visible')

    // click on the next button
    cy.get('.paginate-buttons.next-button').click()

    // click on the back button

    cy.get('.back-button.paginate-buttons').click()
  })
})
