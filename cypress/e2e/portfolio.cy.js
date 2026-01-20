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
      cy.visit('/styleguide.html');
      cy.percySnapshot('Styleguide', { widths });
    });
  });
});
