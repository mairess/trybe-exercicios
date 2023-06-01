// Utilize if...else para escrever um código que defina três variáveis com os valores dos três ângulos internos de um triângulo. 
// Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. 
// Se algum ângulo for inválido, você deve retornar uma mensagem de erro.

// 👀 Dica: para os ângulos serem de um triângulo válido, a soma dos três ângulos deve ser 180 graus. Um ângulo será considerado inválido se não tiver um valor positivo.

let angle1 = 80;
let angle2 = 50;
let angle3 = 50;


if (angle1 + angle2 + angle3 === 180 && angle1 + angle2 + angle3 > 0) {
    return console.log(angle1 + angle2 + angle3 === 180);
} else if (angle1 < 0 || angle2 < 0 || angle3 < 0) {
    return console.log('Não é um angulo valido irmão!');
} else {
    return console.log(angle1 + angle2 + angle3 === 180);
}
