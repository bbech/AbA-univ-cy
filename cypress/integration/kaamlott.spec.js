
describe('Test Page d\'accueil APSIDE .com', () => {
    beforeEach(() => {
        // ICI faire les action redondante à chaque test
        // Exemple authentification avant chaque test
        if (Cypress.env('configFile')) {
            return;
        } else {
            cy.intercept('GET', '/api/auth', { fixture: 'auth.json' });
            cy.intercept('GET', '/api/sounds.98d7c898.json', { fixture: 'sounds.98d7c898.json' });
        }
    });

    it('Visité /', function() {
        // Se rendre sur le path "/"" du site configuré dans ./cypress/config/cypress.{env}.json
        cy.visit('/');
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.inline-flex').click();
        cy.get('[placeholder="Email or Phone Number"]').clear();
        cy.get('[placeholder="Email or Phone Number"]').type('admin');
        cy.get('[placeholder="Pasword"]').clear();
        cy.get('[placeholder="Pasword"]').type('admin');
        cy.get('.bg-gray-50 > .border-transparent').click();
        cy.get('.pl-3').should('have.text', 'Bonjour admin');
        /* ==== End Cypress Studio ==== */
    });
    
    it('Visité /', function() {
        // Se rendre sur le path "/"" du site configuré dans ./cypress/config/cypress.{env}.json
        cy.visit('/');

        /* ==== Generated with Cypress Studio ==== */
        cy.get(':nth-child(1) > :nth-child(1) > .wrapper > .duration-500 > .object-cover').click();
        cy.get('.text-gray-900').should('be.visible');
        cy.get('.text-gray-900').should('have.text', 'Arthur - Le Roi Burgonde');
        /* ==== End Cypress Studio ==== */
    });



});