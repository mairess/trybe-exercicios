// Exemplo de assincronicidade
const firstNumber = 8;
const secondNumber = 9;
let thirdNumber = firstNumber + secondNumber;
console.log(thirdNumber);

setTimeout(() => {
    thirdNumber = secondNumber - firstNumber;
    console.log(thirdNumber);
}, 5000);

console.log(thirdNumber);