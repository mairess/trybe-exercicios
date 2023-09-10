import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../utils/renderWithRouter';

import App from '../App';

describe('testing with React Router', () => {
  it('Renderiza texto da página inicial utilizando BrowserRouter', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    expect(screen.getByRole('heading', { name: /Você está na página Início/i })).toBeInTheDocument();
  });

  it('Renderiza o texto utilizando wrapper', async () => {
    render(<App />, { wrapper: BrowserRouter });
    expect(screen.getByText(/Você está na página Início/i)).toBeInTheDocument();

    const aboutLink = screen.getByRole('link', { name: /sobre/i });
    await userEvent.click(aboutLink);
    const textFromAboutPage = screen.getByText(/você está na página sobre/i);
    expect(textFromAboutPage).toBeInTheDocument();
  });
});

describe('Testando com renderWithRouter', () => {
  it('Navega para a página About', async () => {
    const { user } = renderWithRouter(<App />);

    expect(screen.getByText(/Você está na página Início/i)).toBeInTheDocument();

    const aboutLink = screen.getByRole('link', { name: /Sobre/i });
    await user.click(aboutLink);
    expect(screen.getByText(/Você está na página Sobre/i)).toBeInTheDocument();
  });
});

test('renderiza a página inicial', () => {
  renderWithRouter(<App />);

  expect(screen.getByText(/você está na página início/i)).toBeInTheDocument();
});

describe('Testando o componente About dentro do test app', () => {
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
});
