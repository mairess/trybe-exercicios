 const fs = require('fs').promises;

async function getTheFamily() {
    const data = await fs.readFile('./simpsons.json', 'utf-8');
    const characters = JSON.parse(data);

    const Homer = characters.find((char) => char.id === '1');
    const Lisa = characters.find((char) => char.id === '4');

    if (!Homer || !Lisa) {
        throw new Error('Personagens não encontrados!');
    }

    const family = [Homer, Lisa];
    await fs.writeFile('simpsonFamily.json', JSON.stringify(family))

    const theFamily = await fs.readFile('./simpsonFamily.json', 'utf-8');

    return theFamily;
};

getTheFamily()
    .then((result) => console.log(`Arquivo escrito com sucesso! ${result}`))
    .catch((error) => console.log(error.message));