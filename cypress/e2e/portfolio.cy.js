describe('Portfolio Visual Regression Tests', () => {
  const widths = [375, 768, 1280]; // Mobile, Tablet, Desktop

  describe('Homepage', () => {
    it('should capture homepage at multiple viewports', () => {
      cy.visit('/');

      cy.percySnapshot('Homepage', { widths });
    });
  });

  describe('Styleguide', () => {
    it('should capture styleguide at multiple viewports', () => {
      cy.visit('#/labs/styleguide');

      cy.findByRole('heading', { level: 1, name: 'Styleguide' }).should('be.visible');

      cy.percySnapshot('Styleguide', { widths });
    });
  });

  describe('Dark Mode', () => {
    it('should capture homepage in dark mode', () => {
      cy.visit('/');

      cy.get('body').then(($body) => {
        if (!$body.hasClass('dark-mode')) {
          cy.findByRole('button', { name: 'Toggle theme' }).click();
        }
      });
      cy.percySnapshot('Homepage - Dark Mode', { widths: [1280] });
    });

    it('should capture styleguide in dark mode', () => {
      cy.visit('#/labs/styleguide');

      cy.get('body').then(($body) => {
        if (!$body.hasClass('dark-mode')) {
          cy.findByRole('button', { name: 'Toggle theme' }).click();
        }
      });

      cy.findByRole('heading', { level: 1, name: 'Styleguide' }).should('be.visible');

      cy.percySnapshot('Styleguide - Dark Mode', { widths: [1280] });
    });
  });
});
