const express = require('express');
const readChocolates = require('./getAllChocalates')
const fs = require('fs').promises;
const path = require('path');

const app = express();

app.use(express.json());

app.get('/chocolates/search', async (req, res) => {
    const data = await readChocolates();
    const { chocolates } = data;
    const { name } = req.query;

    const filteredData = chocolates.filter((chocolate) => 
        chocolate.name.toLowerCase().includes(name.toLowerCase()));

    if (filteredData.length <= 0) return res.status(404).json([]);

    res.status(200).json(filteredData);
})

app.get('/chocolates/total', async (req, res) => {
    const data = await readChocolates();
    const { chocolates } = data;

    res.status(200).json({totalChocolates: chocolates.length});
})

app.put('/chocolates/:id', async (req, res) => {
    const filePath = path.resolve(__dirname, './files/theChocolates.json');
    const data = await readChocolates();
    const { chocolates } = data;
    const { id } = req.params;

    const chocolateIndex = chocolates.findIndex((chocolate) => chocolate.id === Number(id));

    if (chocolateIndex === -1) return res.status(404).json({ "message": "chocolate not found" });

    chocolates[chocolateIndex].name = "Mint Pretty Good";
    chocolates[chocolateIndex].brandId = 2;

    await fs.writeFile(filePath, JSON.stringify(data, null, 4), 'utf8');
    

    res.status(200).json({ "chocolate": chocolates[chocolateIndex] });
})

module.exports = app;