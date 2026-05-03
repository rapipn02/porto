import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Hero from './Hero';

describe('Hero Component', () => {
  it('renders greeting, name, and role', () => {
    render(<Hero />);
    
    expect(screen.getByText(/Hi, I'm/i)).toBeInTheDocument();
    expect(screen.getByText('Naufal Rafiif Irwan')).toBeInTheDocument();
    expect(screen.getByText('Backend Developer')).toBeInTheDocument();
  });

  it('renders a CTA button with glass class', () => {
    render(<Hero />);
    const button = screen.getByRole('button', { name: /view my work/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('glass');
  });
});
