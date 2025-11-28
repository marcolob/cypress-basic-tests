// cypress/e2e/api/api_get.cy.js

// Test API GET reali usando JSONPlaceholder
describe('API GET Tests', () => {

  it('GET - Recupera lista di post e valida struttura', () => {
    cy.request('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        
        // Status code OK
        expect(response.status).to.eq(200);

        // Body deve essere un array
        expect(response.body).to.be.an('array');

        // Controlliamo il primo elemento
        expect(response.body[0]).to.have.property('id');
        expect(response.body[0]).to.have.property('title');
      });
  });

  it('GET - Recupera un singolo post e controlla valori specifici', () => {
    cy.request('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id', 1);
        
        expect(response.body.userId).to.eq(1);
      });
  });

});
