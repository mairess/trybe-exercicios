const fs = require('fs').promises;

const theArray = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

async function createFiles() {
    try {
        await Promise.all(theArray.map( async (file, index) => {
            const fileName = `file${index + 1}.txt`
            fs.writeFile(fileName, file)
            console.log(`Criando arquivo: ${fileName}`);
        }))
    } catch (error) {
        console.error(`Erro ao ler o arquivo: ${error.message}`);
    };
};

createFiles()