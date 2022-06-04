describe('regitration of a costumer', () => {
    it('user can sign in', () => {
      cy.visit ('https://www.demoblaze.com/index.html')
      cy.get('a[id="signin2"]').click()
      cy.get('input[id="sign-username"]').type('thisisafalseuser')
      cy.get('input[id="sign-password"]').type('thisisfalsepassword')
      cy.get('button').contains('Sign up').click()
    })
})

describe('regitration of a costumer by Tester parameters', () => {
  it.only('i only pass a username and password', () => {
    cy.sign({username:"new2",password:"newpassword2"})
  })
})