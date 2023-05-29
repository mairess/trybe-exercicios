// Utilize if...else para escrever um código que, dado um salário bruto, calcule o salário líquido a ser recebido.
// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS (Instituto Nacional do Seguro Social) e o IR (Imposto de Renda).
let payment = 3000;
let INSS = '';
let IR = '';

// INSS 
if (payment <= 1556.94) {
    INSS = payment * 0.08;
} else if (payment >= 1556,95 && payment <=2594.92) {
    INSS = payment * 0.09;
} else if (payment >= 2594.93 && payment <= 5189.82) {
    INSS = payment * 0.11;
} else {
    INSS = 570.88;
};

let baseSalray  = payment - INSS;

// IR
if (baseSalray  <= 1903.98) {
    IR = 0;
} else if (baseSalray  >= 1903.99 && baseSalray  <= 2826.65) {
    IR =  baseSalray  * 0.075 - 142.8;
} else if (baseSalray  >= 2826.66 && baseSalray  <= 3751.05) {
    IR = baseSalray  * 0.15 - 354.80;
} else if (baseSalray  >= 3751.06 && baseSalray  <= 4664.68) {
    IR = baseSalray  * 0.225 - 636.13;
} else if (baseSalray  > 4664.68) {
    IR = baseSalray  * 0.27 - 869,36;
};

let salário = baseSalray  - IR;

console.log(salário);

