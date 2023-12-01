const fs = require('fs').promises;
const path = require('path');

const chocolatesPath = path.resolve(__dirname, './files/theChocolates.json');

const readChocolates = async () => {
    try {
        const chocolates = await fs.readFile(chocolatesPath, 'utf-8');
        const parsedChocolates = JSON.parse(chocolates);
        return parsedChocolates;
    } catch(error) {
        console.log(error.message);
    }
};

module.exports = readChocolates;