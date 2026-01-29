declare global {
  namespace Cypress {
    interface Chainable {
      tab(): Chainable<Element>;
    }
  }
}

export {};
