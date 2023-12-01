const fs = require('fs').promises;
const path = require('path');

async function writeFileASync(data) {
    try{
        const filePath = path.resolve(__dirname, 'movies.json');
        await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
        console.log('Dados gravados com sucesso!');
    } catch(error) {
        console.error(`Erro ao escrever o arquivo: ${error.message}`);
    }

};

module.exports = writeFileASync;
