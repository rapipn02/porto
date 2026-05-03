import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Contact from './Contact';

describe('Contact Component', () => {
  it('renders contact title and description', () => {
    render(<Contact />);
    expect(screen.getByText("Let's Connect")).toBeInTheDocument();
    expect(screen.getByText(/reach out/i)).toBeInTheDocument();
  });

  it('renders social icons', () => {
    render(<Contact />);
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('GitHub')).toBeInTheDocument();
  });
});
