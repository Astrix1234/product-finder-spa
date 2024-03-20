import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { Layout } from './Layout/Layout';

test('renders App component', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const appElement = screen.getByTestId('app');
  expect(appElement).toBeInTheDocument();
});

test('renders Search component inside Layout component', () => {
  render(
    <MemoryRouter>
      <Layout />
    </MemoryRouter>
  );

  const searchElement = screen.getByTestId('search');
  expect(searchElement).toBeInTheDocument();
});
