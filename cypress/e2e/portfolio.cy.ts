describe('Portfolio E2E Tests', () => {
  const widths = [375, 768, 1280]; // Mobile, Tablet, Desktop

  beforeEach(() => {
    cy.visit('/');
  });

  describe('Visual Regression Tests', () => {
    describe('Homepage', () => {
      it('should capture homepage at multiple viewports', () => {
        cy.visit('/');

        // Ensure the main navigation landmark is present before snapping
        cy.findByRole('navigation', { name: /main menu/i }).should('be.visible');
        cy.percySnapshot('Homepage', { widths });
      });
    });

    describe('SystemCore', () => {
      it('should capture system core at multiple viewports', () => {
        cy.visit('/#/labs/core');

        cy.findByRole('heading', { level: 1, name: /system core/i }).should('be.visible');
        cy.percySnapshot('System Core', { widths });
      });
    });

    describe('Dark Mode', () => {
      // Helper function to ensure dark mode is active
      const enableDarkMode = () => {
        cy.get('body').then(($body) => {
          const theme = $body.attr('data-theme');
          if (theme !== 'dark') {
            cy.findByRole('button', { name: /toggle theme/i }).click();
          }
        });
        // Verify data-attribute is applied to ensure transition has started/finished
        cy.get('body').should('have.attr', 'data-theme', 'dark');
      };

      it('should capture homepage in dark mode', () => {
        cy.visit('/');
        enableDarkMode();

        cy.percySnapshot('Homepage - Dark Mode', { widths: [1280] });
      });

      it('should capture system core in dark mode', () => {
        cy.visit('#/labs/core');
        enableDarkMode();

        cy.findByRole('heading', { level: 1, name: /system core/i }).should('be.visible');
        cy.percySnapshot('System Core - Dark Mode', { widths: [1280] });
      });
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
      cy.url().should('include', 'section=work');
      cy.get('[id="work"]').should('be.visible');
    });

    it('should trap focus in mobile side nav', () => {
      cy.viewport(375, 667);
      cy.findByRole('button', { name: /open mobile menu/i }).click();
      cy.findByRole('dialog', { name: /mobile menu/i }).should('be.visible');

      // Verify focus is trapped (first element focused)
      cy.focused()
        .should('have.attr', 'aria-label')
        .and('match', /close mobile menu/i);

      // Close it
      cy.findByRole('button', { name: /close mobile menu/i }).click();
      cy.findByRole('dialog', { name: /mobile menu/i }).should('not.exist');
    });

    it('should navigate to labs', () => {
      cy.findByRole('navigation')
        .findByText(/labs/i)
        .click();
      cy.url().should('include', '#/labs');
    });
  });
});
