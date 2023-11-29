const fs = require('fs').promises;

async function addChar(CharName) {
    const data = await fs.readFile('./simpsonFamily.json', 'utf-8');
    const characters = JSON.parse(data);

    const newChar = {
        "id": '11',
        "name": CharName,
    };

    await fs.writeFile('simpsonFamily.json', JSON.stringify([...characters, newChar]))

    const theFamily = await fs.readFile('./simpsonFamily.json', 'utf-8');

    return theFamily;
};

addChar('Nelson Muntz')
    .then((result) => console.log(`Arquivo escrito com sucesso! ${result}`))
    .catch((error) => console.log(error.message));