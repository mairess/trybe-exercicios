// função que gera um número aleatório
const generateRandomNumber = () => Math.round(Math.random() * 10);

// promise resolvida retornando o número aleatório
const resolvedPromise = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = generateRandomNumber();
            resolve(randomNumber);
        }, 1000);
    });

// promise rejeitada retornando um objeto de erro
const rejectedPromise = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = generateRandomNumber();
            reject(new Error(`O número ${randomNumber} não é válido!`));
        }, 1000);
    });

const randomPromisse = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = generateRandomNumber();
            if (randomNumber % 2 === 0) {
                resolve(randomNumber);
            } else {
                reject(new Error(`O número ${randomNumber} não é válido! Somente números parares são válidos`));
            }
        }, 1000)
    });

//   resolvedPromise().then((response) => {
//     console.log(`resolvedPromise: O número gerado é ${response}`);
//   });

//   rejectedPromise()
//   .then((response) => {
//     console.log(`rejectedPromise: O número gerado é ${response}`);
//   }).catch((error) => {
//     console.log(`RejectedPromise: ${error.message}`);
//   });

randomPromisse()
    .then((response) => {
        console.log(`Promise resolvida. O número gerado é ${response}`);
    })
    .catch((error) => {
        console.log(`Promise rejeitada: ${error.message}`);
    })