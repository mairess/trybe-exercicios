const fs = require('fs').promises;
const readline = require('readline-sync');

async function getCharById() {
    const charId = readline.question('qual o id deseja buscar? ');
    const data = await fs.readFile('./simpsons.json', 'utf-8');
    const characters = JSON.parse(data);
    const promise = new Promise((resolve, reject) => {
        const foundChar = characters.find((char) => char.id === charId)
        if (!foundChar) reject(new Error('id não encontrado'))

        resolve(foundChar);
    })
    return promise
};

getCharById('9')
    .then((result) => console.log(`Encontrado: ${JSON.stringify(result)}`))
    .catch((error) => console.log(`Erro: ${error.message}`));