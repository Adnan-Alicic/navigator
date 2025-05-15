export class HomePage {
    searchInput() {
      return cy.get('input[placeholder="Traži ulicu ili objekat"]');
    }
  
  
    firstSearchResult() {
      return cy.get('.search-results .search-result-item').first();
    }
    
  
    pozoristaKategorija() {
      return cy.get('.content').contains('pozorišta').should('be.visible');
        
    };
  
  
  }