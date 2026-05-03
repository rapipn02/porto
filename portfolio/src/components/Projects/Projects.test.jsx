import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Projects from './Projects';

describe('Projects Component', () => {
  it('renders section title', () => {
    render(<Projects />);
    expect(screen.getByText('Featured Projects')).toBeInTheDocument();
  });

  it('renders project cards', () => {
    render(<Projects />);
    expect(screen.getByTestId('project-0')).toBeInTheDocument();
    expect(screen.getByText('Payment Gateway API')).toBeInTheDocument();
    expect(screen.getByText('Go, Redis')).toBeInTheDocument();
  });
});
