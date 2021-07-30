import * as action from '../support/common/action.spec';
import * as validators from '../support/common/validators';


describe('Test Page d\'accueil APSIDE .com', () => {
    beforeEach(() => {
        // ICI faire les action redondante à chaque test
        // Exemple authentification avant chaque test
    });

    it('Visité apside.com ', function() {
        // Se rendre sur le path "/"" du site configuré dans ./cypress/config/cypress.{env}.json
        cy.visit('/');

        //------------ ASSERTION  ------------//
        validators.titreBigOrangeValidator('INNOVATION');
    });

    
    it('Visité et trouver APSIDE TOURS ', function() {
        // Se rendre sur le path "/"" du site configuré dans ./cypress/config/cypress.{env}.json
        cy.visit('/');
        
        action.search('TOURS');

        //Click sur le boutton de la premiere vignette d'apside recherche 
        // ATTENTION ICI si la recherche ne remonte pas dans le même orde que lors de mon test le test echoura
        cy.get('.first > .lanceurBlog > .texte > .intro > .btn-plus2').first().click();

        //------------ ASSERTION  ------------//
        validators.titreBigBleuValidator('Apside Tours');
    });

});