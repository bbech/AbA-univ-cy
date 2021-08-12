
/// <reference types="Cypress"/>

describe('Test Page d\'accueil Kaamlott SoundBoard', () => {
    beforeEach(() => {
        // ICI faire les action redondante à chaque test
        // Exemple authentification avant chaque test
        if (Cypress.env('configFile')) {
            return;
        } else {
            cy.intercept('GET', '/api/auth*', { fixture: 'auth.json' }).as('authApi');
            cy.intercept('GET', '/api/sounds.98d7c898.json', { fixture: 'sounds.98d7c898.json' });
        }

        cy.visit('/');
        cy.logMeIn(); 
    });

    it('Test du login avec admin', function() {
        // Se rendre sur le path "/"" du site configuré dans ./cypress/config/cypress.{env}.json
        cy.wait('@authApi');
        cy.get('.pl-3').should('have.text', `Bonjour ${Cypress.env('username')}`);
    });
    
    it('Test Selection personnage et rafraichissement List de citation', function() {
        // Se rendre sur le path "/"" du site configuré dans ./cypress/config/cypress.{env}.json
        /* ==== Generated with Cypress Studio ==== */
        cy.get(':nth-child(1) > :nth-child(1) > .wrapper > .duration-500 > .object-cover').click();
        cy.get('.text-gray-900').should('be.visible');
        cy.get('.text-gray-900').should('have.text', 'Arthur - Le Roi Burgonde');
        /* ==== End Cypress Studio ==== */
    });

    it('Test Ajout d\'une citation au personnage Merlin', function() {
        // Se rendre sur le path "/"" du site configuré dans ./cypress/config/cypress.{env}.json
        /* ==== Generated with Cypress Studio ==== */
        cy.get(':nth-child(1) > :nth-child(1) > .wrapper > .duration-500 > .object-cover').click();
        cy.get('.text-gray-900').should('be.visible');
        cy.get('.text-gray-900').should('have.text', 'Arthur - Le Roi Burgonde');
        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.get(':nth-child(1) > :nth-child(1) > .wrapper > .duration-500 > .absolute > .w-6').click();
        cy.get('[data-cy=livre_episode]').clear();
        cy.get('[data-cy=livre_episode]').type('sdf sdf sdf qsdf sdq');
        cy.get('#citation').clear();
        cy.get('#citation').type(' fdsf sd fsd');
        cy.get('#message').click();
        cy.get('.border-transparent').click();
        cy.get('.pt-3 >').should('have.length', 2);
        cy.get(':nth-child(2) > .flex > .text-gray-600').should('have.text', 'sdf sdf sdf qsdf sdq');
        /* ==== End Cypress Studio ==== */
    });

        
    it('Test Selection personnage puis d\'un second et rafraichissement Liste de citation sur nouveau personnage', function() {
        // Se rendre sur le path "/"" du site configuré dans ./cypress/config/cypress.{env}.json

        /* ==== Generated with Cypress Studio ==== */
        cy.get(':nth-child(1) > :nth-child(1) > .wrapper > .duration-500 > .object-cover').click();
        cy.get('.text-gray-900').should('be.visible');
        cy.get('.text-gray-900').should('have.text', 'Merlin');
        /* ==== End Cypress Studio ==== */
    });


});