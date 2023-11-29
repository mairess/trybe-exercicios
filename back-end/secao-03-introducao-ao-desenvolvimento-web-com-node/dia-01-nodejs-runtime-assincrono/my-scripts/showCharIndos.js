const fs = require('fs').promises;

async function main() {
    try {
        const data = await fs.readFile('./simpsons.json', 'utf-8');
        const characters = JSON.parse(data);
        characters.forEach((char) => {
            console.log(`${char.id} - ${char.name}`)
        });
    } catch(error) {
        console.log(`Erro ao ler o arquivo: ${error.message}`);
    }
};

main()