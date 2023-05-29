// Utilize if...else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for par. 
// Caso contrário, o código deve retornar false.
// Faça esse exercício utilizando somente um if.

let num1 = 5;
let num2 = 7;
let num3 = 8;
let result = '';

if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
    result = num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0;
} else {
    result = num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0;
};

console.log(result);