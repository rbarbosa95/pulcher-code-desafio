// testing filter

describe('Filter', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should display the button filter', () => {
    // check if the filter is visible
    cy.get('#filter').should('be.visible')
  })

  it('should open the filter', () => {
    // check if the filter is visible
    cy.get('#filter').should('be.visible').click()

    // check if the offcanvas is visible
    cy.get('#offcanvasRight').should('be.visible')
  })

  it('should close the filter', () => {
    // check if the filter is visible
    cy.get('#filter').should('be.visible').click()

    // check if the offcanvas is visible
    cy.get('#offcanvasRight')
      .should('be.visible')
      .within(() => {
        // click on the close button
        cy.get('#closeButton').click()
      })

    // check if the offcanvas is not visible
    cy.get('#offcanvasRight').should('not.be.visible')
  })

  it('should applies filters', () => {
    // check if the filter is visible and click on it
    cy.get('#filter').should('be.visible').click()

    // check if the offcanvas is visible and apply the filter date
    cy.get('#offcanvasRight').within(() => {
      const date = '2010-08-02'
      const price = '139.50'
      cy.get('[data-cy=inputDate]').clear().type(date)
      cy.get('[data-cy=inputPrice]').clear().type(price)
      cy.get('[data-cy=inputStore]').select('Steam')
      cy.get('#btnFilter').should('be.visible').click()
    })
  })

  it('should clear filters', () => {
    // check if the filter is visible and click on it
    cy.get('#filter').should('be.visible').click()

    // check if the offcanvas is visible and apply the filter date
    cy.get('#offcanvasRight').within(() => {
      const date = '2010-08-02'
      const price = '139.50'
      cy.get('[data-cy=inputDate]').clear().type(date)
      cy.get('[data-cy=inputPrice]').clear().type(price)
      cy.get('[data-cy=inputStore]').select('Steam')
      cy.get('#btnClearFilter').should('be.visible').click()
    })
  })
})
