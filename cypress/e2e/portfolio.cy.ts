/// <reference types="cypress" />

describe('Portfolio E2E Tests', () => {
  const widths = [375, 768, 1280]; // Mobile, Tablet, Desktop

  beforeEach(() => {
    cy.visit('/');
  });

  describe('Visual Snapshots', () => {
    it('should capture homepage', () => {
      cy.percySnapshot('Homepage', { widths });
    });

    it('should capture styleguide', () => {
      cy.visit('/#/labs/styleguide');
      cy.findByRole('heading', { level: 1, name: 'Styleguide' }).should('be.visible');
      cy.percySnapshot('Styleguide', { widths });
    });
  });

  describe('Theme Management', () => {
    it('should toggle theme and persist on reload', () => {
      cy.get('body')
        .invoke('attr', 'data-theme')
        .then((initialTheme) => {
          cy.findByRole('button', { name: /toggle theme/i }).click();
          const expectedTheme = initialTheme === 'dark' ? 'light' : 'dark';
          cy.get('body').should('have.attr', 'data-theme', expectedTheme);

          // Persist on reload
          cy.reload();
          cy.get('body').should('have.attr', 'data-theme', expectedTheme);
        });
    });
  });

  describe('Keyboard Navigation & Focus Management', () => {
    it('should scroll to sections when clicking nav links', () => {
      cy.findByRole('navigation', { name: /main menu/i })
        .findByText('Work')
        .click();
      cy.url().should('include', '#work');
      cy.get('[id="work"]').should('be.visible');
    });

    it('should trap focus in mobile side nav', () => {
      cy.viewport(375, 667);
      cy.findByRole('button', { name: /open mobile menu/i }).click();
      cy.findByRole('navigation', { name: /mobile menu/i }).should('be.visible');

      // Verify focus is trapped (first element focused)
      cy.focused()
        .should('have.attr', 'aria-label')
        .and('match', /close mobile menu/i);

      // Close it
      cy.findByRole('button', { name: /close mobile menu/i }).click();
      cy.findByRole('navigation', { name: /mobile menu/i }).should('not.exist');
    });

    it('should navigate to styleguide', () => {
      cy.findByRole('navigation')
        .findByText(/styleguide/i)
        .click();
      cy.url().should('include', '#/labs/styleguide');
    });
  });
});
