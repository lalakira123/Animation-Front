Cypress.Commands.add('resetDatabase', () => {
  cy.request('POST', 'http://localhost:4000/reset').as('resetDatabase')
    .then( res => {
      cy.log('Deletado todas Recomendações anteriores', res);
    });
});

Cypress.Commands.add('createUser', (user) => {
  cy.request('POST', 'http://localhost:4000/signup', user)
    .then( res => {
      cy.log('User Criado', res);
    });
});