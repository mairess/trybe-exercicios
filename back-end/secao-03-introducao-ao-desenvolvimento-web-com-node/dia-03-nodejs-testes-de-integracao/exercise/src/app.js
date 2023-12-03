const express = require('express');
const readChocolates = require('./getAllChocalates')

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

module.exports = app;