/// <reference types="Cypress"/>
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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('logMeIn', () => {
    cy.get('.inline-flex').click();
    cy.get('[placeholder="Email or Phone Number"]').clear();
    cy.get('[placeholder="Email or Phone Number"]').type(Cypress.env('username'));
    cy.get('[placeholder="Pasword"]').clear();
    cy.get('[placeholder="Pasword"]').type(Cypress.env('password'));
    cy.get('.bg-gray-50 > .border-transparent').click();
});

declare namespace Cypress {
    interface Chainable {
        logMeIn: (token: string) => Cypress.Chainable<any>;
    }
}