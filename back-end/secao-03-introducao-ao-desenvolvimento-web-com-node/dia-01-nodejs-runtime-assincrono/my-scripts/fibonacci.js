const fs = require('fs').promises;
const readline = require('readline-sync');

function fibonacci() {
    try {
        let num1 = 1;
    let num2 = 1;
    const number = readline.question('Qual é o número? ');

    if (number <= 0) throw new Error('O número precisa ser maior que zero (0)');

    let soma = num1 + num2;

    for (let index = 1; index <= number; index+=1) {
            console.log(num2);
            num1 = num2;
            num2 = soma;
            soma = num1 + num2;
    }
    } catch(error) {
        console.log(error.message);
    }
};

fibonacci();