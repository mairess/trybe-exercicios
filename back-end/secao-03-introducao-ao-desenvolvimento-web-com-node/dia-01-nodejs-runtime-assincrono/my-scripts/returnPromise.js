function returnPromise(param1, param2, param3) {
    const promise = new Promise((resolve, reject) => {
        if (isNaN(param1) || isNaN(param2) || isNaN(param3)) {
            reject(new Error('Informe apenas números'));
        }

        const result = (param1 + param2) * param3;

        if (result < 50) reject(new Error('Valor muito baixo'));

        resolve(result);

    });

    return promise;
};

returnPromise(1, 1, 1)
    .then((result) => result)
    .catch((error) => console.log(`Erro: %s`, error.message));