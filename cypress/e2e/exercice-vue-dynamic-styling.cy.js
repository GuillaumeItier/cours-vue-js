describe('Test sur le Composant (Page) Dynamic Styling', () => {
  
  beforeEach(() => {
    cy.visit('http://localhost:5173/dynamic-styling')
  });

  it('Affiche le titre de la page', () => {
    cy.get('h1').should('contain.text', 'Dynamic Styling (Class)')
  });

  describe('Interactions avec les boutons de style', () => {

    // TEST 1 : On clique sur le Bouton 1 
    it('Bascule le style des boutons 1 et 2 lors du clic sur le bouton 1', () => {
      // 1 Couleurs de départ
      cy.get('.grid button').eq(0).should('have.css', 'background-color', 'rgb(0, 181, 255)');
      cy.get('.grid button').eq(1).should('have.css', 'background-color', 'rgb(255, 0, 127)');

      // 2 Action au Clic sur le bouton 1 
      cy.get('.grid button').eq(0).click();

      // 3 Vérification si les deux passent au Cyan
      cy.get('.grid button').eq(0).should('have.css', 'background-color', 'rgb(0, 255, 204)');
      cy.get('.grid button').eq(1).should('have.css', 'background-color', 'rgb(0, 255, 204)');

      // 4 Retour à l'état initial
      cy.get('.grid button').eq(0).click();
      cy.get('.grid button').eq(0).should('have.css', 'background-color', 'rgb(0, 181, 255)');
      cy.get('.grid button').eq(1).should('have.css', 'background-color', 'rgb(255, 0, 127)');
    });

    // TEST 2 : On clique sur le Bouton 2 
    it('Bascule le style des boutons 1 et 2 lors du clic sur le BOUTON 2', () => {
      // 1 Couleurs de départ
      cy.get('.grid button').eq(0).should('have.css', 'background-color', 'rgb(0, 181, 255)');
      cy.get('.grid button').eq(1).should('have.css', 'background-color', 'rgb(255, 0, 127)');

      // 2 Action au clic sur le bouton 2 
      cy.get('.grid button').eq(1).click();

      // 3 Vérification si les deux passent au Cyan
      cy.get('.grid button').eq(0).should('have.css', 'background-color', 'rgb(0, 255, 204)');
      cy.get('.grid button').eq(1).should('have.css', 'background-color', 'rgb(0, 255, 204)');

      // 4 Retour à l'état initial
      cy.get('.grid button').eq(1).click();
      cy.get('.grid button').eq(0).should('have.css', 'background-color', 'rgb(0, 181, 255)');
      cy.get('.grid button').eq(1).should('have.css', 'background-color', 'rgb(255, 0, 127)');
    });

  });

});
