import { useState } from 'react';
import { mount } from 'cypress/react';
import ClapCounter from './clap-counter';

const noop = () => undefined;

describe(ClapCounter.name, () => {
  describe('it displays the correct text based on props', () => {
    it('should display the correct text when clapCount is 0', () => {
      mount(<ClapCounter clapCount={0} clap={noop} />);
      cy.contains(`No one's clapped yet`);
    });
    it('should display the correct text when clapCount is 1', () => {
      mount(<ClapCounter clapCount={1} clap={noop} />);
      cy.contains('1 clap so far');
    });
    it('should display the correct text when clapCount is 5', () => {
      mount(<ClapCounter clapCount={5} clap={noop} />);
      cy.contains('5 claps so far');
    });
  });
  it('should emit clap event when clicked', () => {
    const clapSpy = cy.spy().as('clapSpy');
    mount(<ClapCounter clapCount={0} clap={clapSpy} />);
    cy.get('@clapSpy').should('not.have.been.called');
    cy.get('button').click();
    cy.get('@clapSpy').should('have.been.called');
  });
  it('fixture example', () => {
    const Fixture = () => {
      const [clapCount, setClapCount] = useState(0);
      return (
        <ClapCounter
          clapCount={clapCount}
          clap={() => setClapCount(clapCount + 10)}
        />
      );
    };
    mount(<Fixture />);
    cy.contains(`No one's clapped yet`);
    cy.get('button').click();
    cy.contains('10 claps so far');
  });
});
