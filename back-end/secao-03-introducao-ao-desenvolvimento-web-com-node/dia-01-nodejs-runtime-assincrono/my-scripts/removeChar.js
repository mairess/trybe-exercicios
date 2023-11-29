const readline = require('readline-sync');
const fs = require('fs').promises;

async function removeChar() {
    const charId1 = readline.question('qual o id 1? ');
    const charId2 = readline.question('qual o id 2? ');

    const data = await fs.readFile('./simpsons.json', 'utf-8');
    const characters = JSON.parse(data);

    const foundChar1 = characters.some((char) => char.id === charId1);
    const foundChar2 = characters.some((char) => char.id === charId2);

    if(!foundChar1 || !foundChar2) throw new Error('Não é possível remover id inexistente!');

    const filteredCharacters = characters.filter((char) => char.id !== charId1 && char.id !== charId2);

    await fs.writeFile('./simpsons.json', JSON.stringify(filteredCharacters));

    return (filteredCharacters);
};

removeChar()
    .then((results) => console.log(`Removido com suceço! ${JSON.stringify(results)}`))
    .catch((error) => console.log(error.message));