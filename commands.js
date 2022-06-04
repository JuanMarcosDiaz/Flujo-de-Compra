// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('login', ({email, password}) => {
    cy.get('[id="email"]').type(email)
    cy.get('[id="pass"]').type(password)
    cy.contains('Iniciar sesión').click()
 })

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
