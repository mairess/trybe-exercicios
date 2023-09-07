import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../utils/renderWithRouter';

test('Testing NotFound component', () => {
  renderWithRouter(<App />, { route: '/not-found-page' });

  expect(screen.getByText(/página não encontrada/i)).toBeInTheDocument();
});
