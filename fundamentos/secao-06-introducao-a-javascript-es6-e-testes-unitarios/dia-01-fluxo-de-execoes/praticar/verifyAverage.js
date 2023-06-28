const checkNumber = (numb1, numb2, numb3, numb4) => {
    if (typeof numb1 !== 'number' || typeof numb2 !== 'number' ||typeof numb3 !== 'number' || typeof numb4 !== 'number') {
        throw new Error('Todos os valores precisam ser um números');
       }
};

calculateAverage = (numb1, numb2, numb3, numb4) => {
    const sum = numb1 + numb2 + numb3 + numb4;
    const average = sum / 4;
    return average;
};

const verifyGrade = (numb1, numb2, numb3, numb4) => {
    try {
        checkNumber(numb1, numb2, numb3, numb4);
        return calculateAverage(numb1, numb2, numb3, numb4);
    } catch(error) {
        return error.message;
    }
};

console.log(verifyGrade(40, 5, 4, 5));