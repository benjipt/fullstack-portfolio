import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

describe('App', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  });

  test('renders App component', () => {
    expect(screen.getByText(/about/i)).toBeInTheDocument();
    expect(screen.getByText(/projects/i)).toBeInTheDocument();
  });

  test('renders Projects component by default', () => {
    expect(screen.getByTestId('projects')).toBeInTheDocument();
    expect(screen.queryByTestId('about')).toBeNull();
  });

  test('renders About component on click', () => {
    const aboutButton = screen.getByText(/about/i);
    fireEvent.click(aboutButton);
    expect(screen.getByTestId('about')).toBeInTheDocument();
    expect(screen.queryByTestId('projects')).toBeNull();
  });

  test('renders Projects component on click', () => {
    const aboutButton = screen.getByText(/about/i);
    const projectsButton = screen.getByText(/projects/i);

    fireEvent.click(aboutButton);
    fireEvent.click(projectsButton);

    expect(screen.getByTestId('projects')).toBeInTheDocument();
    expect(screen.queryByTestId('about')).toBeNull();
  });
});
