describe('clap', () => {
  beforeEach(() => {
    cy.task('restartServer');
    cy.visit('/');
  });

  it('should count claps', () => {
    cy.contains(`No one's clapped yet`);
    cy.get('button').click();
    cy.contains('1 clap so far!');
  });
});
