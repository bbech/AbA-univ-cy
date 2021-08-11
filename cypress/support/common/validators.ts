/// <reference types="Cypress"/>
// Field validator
export function titreBigBleuValidator(textToVerify: string){
   // Verifie que le titre de la page est visible
   cy.get('.titreBigBleu').should('be.visible');
   // Verifie que le titre est exactement "Apside Tours"(case sensitive)
   cy.get('.titreBigBleu').should('have.text', textToVerify);
}

export function titreBigOrangeValidator(textToVerify: string){
   // Verifie que le titre de la page est visible
   cy.get('.titreBigOrange').should('be.visible');
   // Verifie que le titre est exactement "INNOVATION" (case sensitive)
   cy.get('.titreBigOrange').should('have.text', textToVerify);
}
