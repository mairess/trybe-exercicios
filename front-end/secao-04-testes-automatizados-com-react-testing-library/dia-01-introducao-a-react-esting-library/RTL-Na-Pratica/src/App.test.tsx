import { render, screen } from "@testing-library/react"
import App from "./App"

test('Verifica se o input de emial está na tela', () => {
    // acessar os elementos na tela
    render(<App />);
    const emialInput = screen.getByLabelText('Email:');

    // agir interagindo os elementos da tela (se necessário)

    // aferir
    expect(emialInput).toBeInTheDocument();
    expect(emialInput).toHaveProperty('type', 'email');
})