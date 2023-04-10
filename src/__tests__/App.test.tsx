import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

describe('App', () => {
  test('renders App component', () => {
    render(<App />);
    expect(screen.getByRole('button', { name: /about/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /projects/i })).toBeInTheDocument();
  });

  test('renders Projects component by default', () => {
    render(<App />);
    expect(screen.getByTestId('projects')).toBeInTheDocument();
    expect(screen.queryByTestId('about')).toBeNull();
  });

  test('renders About component on click', () => {
    render(<App />);
    const aboutButton = screen.getByRole('button', { name: /about/i });
    fireEvent.click(aboutButton);
    expect(screen.getByTestId('about')).toBeInTheDocument();
    expect(screen.queryByTestId('projects')).toBeNull();
  });

  test('renders Projects component on click', () => {
    render(<App />);
    const aboutButton = screen.getByRole('button', { name: /about/i });
    const projectsButton = screen.getByRole('button', { name: /projects/i });

    fireEvent.click(aboutButton);
    fireEvent.click(projectsButton);

    expect(screen.getByTestId('projects')).toBeInTheDocument();
    expect(screen.queryByTestId('about')).toBeNull();
  });
});
