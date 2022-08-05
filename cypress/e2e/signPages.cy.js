/// <reference types="cypress" />

import { faker } from '@faker-js/faker';

const URL = 'http://localhost:3000';

beforeEach(() => {
  cy.resetDatabase();
});

describe('Test the SignUp and SignIn pages', () => {
  const password = faker.internet.userName();
  const user = {
    name: faker.internet.userName(),
    email: faker.internet.email(),
    imageUrl: faker.internet.url(),
    password,
    confirmPassword: password
  }

  it('Go to SignUp Page and Create a new User and then Login', async () => {
    cy.visit(URL);

    cy.contains('Não possui uma conta? Clique aqui').click();

    cy.contains('Name').click().type(user.name);
    cy.contains('E-mail').click().type(user.email);
    cy.contains('Image URL').click().type(user.imageUrl);
    cy.contains('Password').click().type(user.password);
    cy.get('input').eq(4).type(user.confirmPassword);

    cy.intercept('POST', '/signup').as('signUp');
    cy.contains('Cadastrar').click();
    cy.wait('@signUp');

    cy.contains('Usuário Criado com Sucesso!').should('exist');

    cy.contains('Assista agora!', {timeout: 2000});

    cy.contains('E-mail').click().type(user.email);
    cy.contains('Password').click().type(user.password);

    cy.intercept('POST', '/signin').as('signIn');
    cy.contains('Entrar').click();
    cy.wait('@signIn');

    cy.contains('Login efetuado!').should('exist');
  });
});