// cypress/e2e/api/api_post.cy.js

describe('API POST Tests', () => {

  it('POST - Crea un nuovo post e controlla la risposta', () => {
    cy.request({
      method: 'POST',
      url: 'https://jsonplaceholder.typicode.com/posts',
      body: {
        title: 'Test Title',
        body: 'Test body content',
        userId: 1,
      },
      headers: { 'Content-type': 'application/json; charset=UTF-8' }
    }).then((response) => {

      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('title', 'Test Title');
      expect(response.body).to.have.property('id');  // l'API restituisce un ID fittizio
    });
  });

});
