import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '@/App';
import { BrandProvider } from '@/context/BrandContext';
import { ThemeProvider } from '@/context/ThemeContext';

describe('App Smoke Test', () => {
  it('renders without crashing', () => {
    render(
      <ThemeProvider>
        <BrandProvider>
          <App />
        </BrandProvider>
      </ThemeProvider>
    );
    // Just a simple check if the main entry point renders
    expect(document.body).toBeDefined();
  });
});
