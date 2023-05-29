// Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela pode fazer.

// - Se a peça passada for inválida, o código deve retornar uma mensagem de erro.

// ⭐️ Desafio extra, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, 
// sem aumentar a quantidade de condicionais. 
// Uma dica é pesquisar uma função que faça uma string ficar com todas as letras minúsculas (lower case).

// Exemplo: Bispo -> Diagonais.

let chassPieace = 'ROOK'

switch (chassPieace.toLowerCase()) {
    case 'king':
        console.log('Moves one square in any direction.');
        break;
    case 'queen':
        console.log('Moves any number of squares diagonally, horizontally, or vertically.');
        break;
    case 'rook':
        console.log('Moves any number of squares horizontally or vertically.');
        break;
    case 'bishop':
        console.log('Moves any number of squares diagonally.');
        break;
    case 'knight':
    console.log('Moves in an ‘L-shape,’ two squares in a straight direction, and then one square perpendicular to that.');
        break;
    case 'pawn':
    console.log('Moves one square forward, but on its first move, it can move two squares forward. It captures diagonally one square forward');
        break;
    default:
    console.log('Not chess piece');
}
