
/// <reference types="Cypress"/>

describe('Test Page d\'accueil Kaamlott SoundBoard', () => {
    beforeEach(() => {

        cy.intercept('GET', '/api/auth*', { fixture: 'auth.json' }).as('authApi');
        cy.intercept('GET', '/api/sounds.98d7c898.json', { fixture: 'sounds.98d7c898.json' });
    });

    it('Test 1', function() {
        cy.visit('/');
        /* ==== Generated with Cypress Studio ==== */
        login()

        cy.wait('@authApi')

        cy.get('.block > .flex > .text-gray-600').click().then(elmt => {
            cy.get('option1').click()
        })
        /* ==== End Cypress Studio ==== */
    });

    it('Test du login avec admin', function() {
        cy.visit('/');
        login()
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.inline-flex').click();
        cy.get('.w-80 > [type="text"]').clear();
        cy.get('.w-80 > [type="text"]').type(Cypress.env('username'));
        cy.get('[type="password"]').clear();
        cy.get('[type="password"]').type(Cypress.env('username'));
        cy.get('.bg-gray-50 > .border-transparent').click();
        cy.get('.pl-3').should('have.text', 'Bonjour admin');
        /* ==== End Cypress Studio ==== */
    });
    
});

function login() {
    cy.get(':nth-child(1) > :nth-child(1) > .wrapper > .duration-500 > .object-cover').click();
    cy.get('.text-gray-900').should('have.text', 'Arthur - Le Roi Burgonde');
    cy.get('.block > .flex > .text-gray-600').should('have.text', 'Livre II, 03 - Le Dialogue de Paix');
}