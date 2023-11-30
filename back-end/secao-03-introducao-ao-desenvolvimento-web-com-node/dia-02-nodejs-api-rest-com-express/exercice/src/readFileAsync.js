const fs = require('fs').promises;
const path = require('path');

async function readFileAsync() {
    try{
        const filePath = path.resolve(__dirname, 'movies.json');
        const data = await fs.readFile(filePath, 'utf-8');
        const parsed = JSON.parse(data);
        return parsed
    } catch(error) {
        console.error(`Erro ao ler o arquivo: ${error.message}`);
    }

};

readFileAsync();

module.exports = readFileAsync;
