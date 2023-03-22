// https://docs.cypress.io/api/introduction/api.html

describe('App tests', () => {
  it('check if page renders', () => {
    cy.visit('https://www.google.com')
    cy.contains('Pesquisa Google').click()
  })
})
