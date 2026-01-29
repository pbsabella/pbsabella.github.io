import '@percy/cypress';
import '@testing-library/cypress/add-commands';

// Tab command for keyboard navigation testing
Cypress.Commands.add('tab', () => {
  cy.focused().trigger('keydown', { keyCode: 9, which: 9, key: 'Tab' });
});
