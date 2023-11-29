const fs = require('fs').promises;
const readline = require('readline-sync');

async function characters() {
    const getOut = readline.question('Quem deve sair? ');
    const getIn = readline.question('Quem deve entar? ');

    const dataSimpsons = await fs.readFile('./simpsons.json', 'utf-8');
    const charactersSimpsons = JSON.parse(dataSimpsons);

    const dataSimpsonsFamily = await fs.readFile('./simpsonFamily.json', 'utf-8');
    const charactersSimpsonsFamily = JSON.parse(dataSimpsonsFamily);

    const toGetOut = charactersSimpsonsFamily.find((char) => char.name === getOut);
    const toGetIn = charactersSimpsons.find((char) => char.name === getIn);

    if (!toGetOut || !toGetIn) {
        throw new Error('Personagens não encontrados!');
        process.exit()
    }

    const updated = charactersSimpsonsFamily.filter((char) => char.name !== toGetOut.name)
    const updatedSimpsonFamily = await fs.writeFile('simpsonFamily.json', JSON.stringify([...updated, toGetIn]))

    return updatedSimpsonFamily;
};

characters()
    .then((result) => console.log(`Arquivo escrito com sucesso! ${result}`))
    .catch((error) => console.log(error.message));