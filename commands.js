
Cypress.Commands.add('sign', ({username, password}) => {
    cy.visit ('https://www.demoblaze.com/index.html')
    cy.get('a[id="signin2"]').click()
    cy.get('input[id="sign-username"]').type(username)
    cy.get('input[id="sign-password"]').type(password)
    cy.get('button').contains('Sign up').click()
 })

Cypress.Commands.add('login', ({username, password}) => {
    cy.visit ('https://www.demoblaze.com/index.html')
    cy.get('a[id="login2"]').click()
    cy.get('input[id="loginusername"]').type(username)
    cy.get('input[id="loginpassword"]').type(password)
    cy.get('button').contains('Log in').click()
})
