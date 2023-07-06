//  Nova pessoa contratada

const newEmployee = (name) => {
    const emailName =  name.toLowerCase().replace(' ', '-');
    return { name, email: `${emailName}@trybe.com` }
};
const newEmployees = (callback) => {
    const employees = {
      id1: newEmployee('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: newEmployee('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: newEmployee('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

console.log(newEmployees(newEmployee));

// Sorteador de loteria
const verifyNumber = (number, raffleNumber) => number === raffleNumber;

const raffleOff = (number, callback) => {
    const raffleNumber = Math.ceil(Math.random() * 5)
    return callback(number, raffleNumber) ? 'Parabéns você ganhou' : 'Tente novamente';
};

console.log(raffleOff(5, verifyNumber));

// Corretor automático de exame
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const verifyAnswres = (rightAnswers, studenteAnswers) => {
    if (studenteAnswers === rightAnswers) {
        return 1;
    }
    if (studenteAnswers === 'N.A') {
        return 0;
    }
    return -0.5;

};
const testCorrector = (rightAnswers, studenteAnswers, callback) => {
    let grade = 0;
    for (let index = 0; index < rightAnswers.length; index += 1) {
        const giveGrade = verifyAnswres(rightAnswers[index], studenteAnswers[index]);
        grade += giveGrade;
    };

    return `Resultado final: ${grade} pontos`;
};

console.log(testCorrector(RIGHT_ANSWERS, STUDENT_ANSWERS, verifyAnswres));