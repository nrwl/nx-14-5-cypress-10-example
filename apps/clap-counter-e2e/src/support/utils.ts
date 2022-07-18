import { Server } from 'http';

export const setupE2e = () => {
  beforeEach(() => {
    cy.task('restartServer');
    cy.visit('/');
  });
};
