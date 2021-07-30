// Search Action
// NOTE //
// N'hesité pas a créer de fichier d'action autant que vous avez de metier a tester ;-) 
// Here some link ==> 
// https://www.cypress.io/blog/2019/01/03/stop-using-page-objects-and-start-using-app-actions/

export function openSearchBar() {
    // Click su le bouton de recherche
    cy.get('.search_menu').click();
    cy.log('Clique sur le boutton de recherche');
}

export function search(query: string) {
    openSearchBar();
    // Tappe "TOURS" dans l'input de recherche 
    cy.get('#s').type(query);
    cy.log('Tappe la recherche: ' + query);
    // Clicker sur le bouton d'action de recherch
    cy.get('#search_btn').click();
    cy.log('Clique sur le boutton d`\'action de recherche');
}

