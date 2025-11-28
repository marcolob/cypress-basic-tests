// cypress/e2e/api/api_intercept.cy.js

describe('API Intercept Tests', () => {

  it('Mocka risposta API con cy.intercept()', () => {
    
    // Intercetta la chiamata e risponde con un mock
    cy.intercept('GET', 'https://jsonplaceholder.typicode.com/posts/1', {
      statusCode: 200,
      body: {
        id: 1,
        title: 'Mocked Title',
        userId: 999
      }
    }).as('mockPost');

    // Trigger della request (puoi usare cy.request oppure visitare una pagina)
    cy.request('https://jsonplaceholder.typicode.com/posts/1');
    
    cy.wait('@mockPost').then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
      expect(interception.response.body.title).to.eq('Mocked Title');
      expect(interception.response.body.userId).to.eq(999);
    });

  });

});
