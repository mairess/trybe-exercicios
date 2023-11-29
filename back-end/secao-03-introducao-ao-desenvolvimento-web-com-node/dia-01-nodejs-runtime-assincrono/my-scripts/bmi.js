const readline = require('readline-sync');

// const weightInKg = 69;
// const heightInM = 1.75; 

function handleBMI() {
    const weightFloat = readline.questionFloat('What’s your weight? ');
    const height = readline.questionInt('What’s your height? ');

    const heightInCm = height / 100;

    const result = weightFloat / (heightInCm * heightInCm);
    return result;
};

function main() {
    let categoria =''
    const bmi = handleBMI().toFixed(2);
    switch (true) {
        case (bmi < 18.5):
            categoria = 'Abaixo do peso (magreza)';
            break;
        case (bmi < 24.9):
            categoria = 'Peso normal';
            break;
        case (bmi < 29.9):
            categoria = 'Acima do peso (sobrepeso)';
            break
        case (bmi < 34.9):
            categoria = 'Obesidade grau I';
        case (bmi < 39.9):
            categoria = 'Obesidade grau II';
            break
        default:
            categoria = 'Obesidade graus III e IV';
            break;
    }
    
    console.log(`O seu IMC é: ${bmi} e sua categoria é: ${categoria}`);
};

main()