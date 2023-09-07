import { screen } from '@testing-library/react';
import renderWithRouter from '../utils/renderWithRouter';

import App from '../App';

it('Renderiza o componente About', () => {
  renderWithRouter(<App />, { route: '/about' });
  expect(screen.getByText(/Você está na página Sobre/i)).toBeInTheDocument();
});

it('Navega para página Inicio', async () => {
  const { user } = renderWithRouter(<App />, { route: '/about' });

  const homeLink = screen.getByRole('link', { name: /Início/i });
  await user.click(homeLink);
  expect(screen.getByText(/Você está na página Início/i)).toBeInTheDocument();
});
