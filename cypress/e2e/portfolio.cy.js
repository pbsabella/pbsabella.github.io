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
      cy.visit('#/labs/styleguide');
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

  describe('Navigation', () => {
    it('should scroll to sections when clicking nav links', () => {
      cy.get('nav').findByText(/work/i).click();
      cy.url().should('include', '#work');
      cy.get('#work').should('be.visible');
    });

    it('should open and close mobile side nav', () => {
      cy.viewport(375, 667);
      cy.findByRole('button', { name: /open main menu/i }).click();
      cy.get('#side-nav').should('be.visible');

      // Check focus trapping (first element should be focused)
      cy.focused().should('have.id', 'side-menu-close');

      // Close it
      cy.findByRole('button', { name: /close menu/i }).click();
      cy.get('#side-nav').should('not.be.visible');
    });
  });
});
