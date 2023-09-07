import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import About from '../pages/About';

it('Renderiza o componente About', () => {
  render(<About />, { wrapper: BrowserRouter });
  expect(screen.getByText(/Você está na página Sobre/i)).toBeInTheDocument();
});

it('Navega para página Inicio', async () => {
  render(<About />, { wrapper: BrowserRouter });

  expect(screen.getByText(/Você está na página Sobre/i)).toBeInTheDocument();
  const homeLink = screen.getByRole('link', { name: /Início/i });
  await userEvent.click(homeLink);

  expect(screen.getByText(/Você está na página Início/i)).toBeInTheDocument();
});
