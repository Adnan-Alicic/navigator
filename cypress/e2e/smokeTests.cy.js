import { HomePage } from '../support/page_objects/homePage';

const homePage = new HomePage();

describe('Navigator Smoke Tests', () => {
  beforeEach(() => {
    cy.visit('https://www.navigator.ba');
  });

  it('Search, select result, and click pin on map', () => {
    homePage.searchInput().type('kino{enter}');
    cy.get('#ember1093 > .place-shading').click();
  });

  it('Select kategoriju Pozorišta, open result, and see location', () => {
    homePage.pozoristaKategorija().click();
  });

});
