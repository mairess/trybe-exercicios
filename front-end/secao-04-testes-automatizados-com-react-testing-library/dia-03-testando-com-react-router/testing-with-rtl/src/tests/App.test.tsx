// src/App.test.tsx

import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

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
