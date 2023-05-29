// Utilize if/else para escrever um código que retorne o maior de três números. 
// Defina, no começo do seu código, três variáveis com os valores que serão comparados.

let num1 = 50;
let num2 = 70;
let num3 = 77;

if (num1 > num2 && num1 > num3) {
    console.log(num1);
} else if (num2 > num1 && num2 > num3) {
    console.log(num2);
} else if (num3 > num1 && num3 > num2) {
    console.log(num3);
} else {
    console.log('números iguais');
}