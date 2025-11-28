// cypress/e2e/api/api_negative.cy.js

describe('API Negative Tests', () => {

  it('GET - 404 Not Found', () => {
    cy.request({
      url: 'https://jsonplaceholder.typicode.com/postssss',
      failOnStatusCode: false // importante per testare i codici di errore
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });

  it('POST - Body mancante', () => {
    cy.request({
      method: 'POST',
      url: 'https://jsonplaceholder.typicode.com/posts',
      failOnStatusCode: false,
      body: {}
    }).then((response) => {
      expect(response.status).to.be.oneOf([400, 201]); 
      // dipende da JSONPlaceholder, normalmente risponde 201
    });
  });

});
