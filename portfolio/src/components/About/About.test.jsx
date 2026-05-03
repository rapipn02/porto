import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import About from './About';

describe('About Component', () => {
  it('renders section title', () => {
    render(<About />);
    expect(screen.getByText('Tech Stack & Expertise')).toBeInTheDocument();
  });

  it('renders 4 skill cards', () => {
    render(<About />);
    expect(screen.getByTestId('skill-0')).toBeInTheDocument();
    expect(screen.getByTestId('skill-3')).toBeInTheDocument();
    
    // Check for specific text
    expect(screen.getByText('Go / Node.js')).toBeInTheDocument();
    expect(screen.getByText('Docker / Kubernetes')).toBeInTheDocument();
  });
});
