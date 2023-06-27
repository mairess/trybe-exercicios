const verifyParam = (name, age) => {
    if (!name || !age) {
        throw new Error('Todas as informações são necessárias');
    }
};

const verifyAge = (age) => {
    if (age < 18) {
        throw new Error('Ops, infelizmente nesse momento você não pode fazer as aulas');
    }
};

const studentRegister = (name, age) => {
try {
    verifyParam(name, age);
    verifyAge(age);
    const message = `${name}, seja bem-vindo(a) à AuTrybe!`;
    return message;
}
catch (error) {
    return error.message;
}
}

console.log(studentRegister('Maires', 19));