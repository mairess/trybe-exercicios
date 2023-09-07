import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

test('Verifica se o input de emial está na tela', () => {
  // acessar os elementos na tela
  render(<App />);
  const emailInput = screen.getByLabelText('Email:');

  // agir interagindo com os elementos da tela (se necessário)

  // aferir
  expect(emailInput).toBeInTheDocument();
  expect(emailInput).toHaveProperty('type', 'email');
});

test('Verifica se existem dois botões na tela', () => {
  // acessar os elementos na tela
  render(<App />);
  const buttons = screen.getAllByRole('button');

  // agir interagindo com os elementos da tela (se necessário)

  // aferir
  expect(buttons).toHaveLength(2);
});

test('Verifica se existe um botão enviar na tela', () => {
  // acessar os elementos na tela
  render(<App />);
  const btnSend = screen.getByTestId('id-send');

  // agir interagindo com os elementos da tela (se necessário)

  // aferir
  expect(btnSend).toBeInTheDocument();
});

test('Verifica se existe um botão voltar na tela', () => {
  // acessar os elementos na tela
  render(<App />);
  const btnBack = screen.getByRole('button', { name: 'Voltar' });

  // agir interagindo com os elementos da tela (se necessário)

  // aferir
  expect(btnBack).toBeInTheDocument();
});

test('Verifica se o campo "email" e o botão "enviar" funcionam corretamente', async () => {
  // acessar os elementos na tela
  render(<App />);
  const inputMail = screen.getByLabelText('Email:');
  const btnSend = screen.getByTestId('id-send');
  const title = screen.getByRole('heading', { name: 'Valor:' });

  const EMAIL_USER = 'email@email.com';

  // agir interagindo com os elementos da tela (se necessário)
  await userEvent.type(inputMail, EMAIL_USER);
  await userEvent.click(btnSend);

  // aferir
  expect(inputMail).toHaveValue('');
  expect(title).toHaveTextContent(`Valor: ${EMAIL_USER}`);
});
