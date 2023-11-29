const fs = require('fs').promises;
const path = path('path');


async function readMissionsData() {
    try {
        const data = await fs.readFile(path.resolve(__dirname, '../../data/missions.json'))
        console.log(data)
    } catch(error) {
        console.error(`Erro na leitura do arquivo ${error}`);
    }
};

readMissionsData();