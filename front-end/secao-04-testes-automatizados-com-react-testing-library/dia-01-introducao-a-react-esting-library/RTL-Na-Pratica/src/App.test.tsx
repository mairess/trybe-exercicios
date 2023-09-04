import { render, screen } from "@testing-library/react"
import App from "./App"

test('Verifica se o input de emial está na tela', () => {
    // acessar os elementos na tela
    render(<App />);
    const emialInput = screen.getByLabelText('Email:');

    // agir interagindo com os elementos da tela (se necessário)

    // aferir
    expect(emialInput).toBeInTheDocument();
    expect(emialInput).toHaveProperty('type', 'email');
})

test('Verifica se existem dois botões na tela', () => { 
    // acessar os elementos na tela
    render(<App />);
    const buttons = screen.getAllByRole('button');

    // agir interagindo com os elementos da tela (se necessário)

    // aferir
    expect(buttons).toHaveLength(2);
 })

 test('Verifica se existe um botão enviar na tela', () => { 
    // acessar os elementos na tela
    render(<App />);
    const btnSend = screen.getByTestId('id-send');

    // agir interagindo com os elementos da tela (se necessário)

    // aferir
    expect(btnSend).toBeInTheDocument();
 })

 test('Verifica se existe um botão voltar na tela', () => { 
    // acessar os elementos na tela
    render(<App />);
    const btnBack = screen.getByRole('button', { name: 'Voltar' });

    // agir interagindo com os elementos da tela (se necessário)

    // aferir
    expect(btnBack).toBeInTheDocument();
 })