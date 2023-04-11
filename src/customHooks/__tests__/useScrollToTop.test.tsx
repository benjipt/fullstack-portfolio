// useScrollToTop.test.tsx
import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { useScrollToTop } from '../useScrollToTop';

// Test component that uses the custom hook
const TestComponent: React.FC = () => {
  useScrollToTop();
  return <div>Test Component</div>;
};

// ScrollToTop mock function
const scrollToMock = () => {
  global.scrollTo = jest.fn();
};

describe('useScrollToTop', () => {
  beforeEach(() => {
    scrollToMock();
  });

  it('should call scrollTo on pathname change', () => {
    render(
      <MemoryRouter initialEntries={['/initial']}>
        <Routes>
          <Route path="/initial" element={<TestComponent />} />
          <Route path="/new" element={<TestComponent />} />
        </Routes>
      </MemoryRouter>
    );

    // Initial render should call scrollTo once
    expect(global.scrollTo).toHaveBeenCalledTimes(1);

    // Navigate to the new route
    render(
      <MemoryRouter initialEntries={['/new']}>
        <Routes>
          <Route path="/initial" element={<TestComponent />} />
          <Route path="/new" element={<TestComponent />} />
        </Routes>
      </MemoryRouter>
    );

    // After navigation, scrollTo should be called again
    expect(global.scrollTo).toHaveBeenCalledTimes(2);
  });
});
