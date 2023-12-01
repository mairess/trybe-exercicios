const express = require('express');
const readChocolates = require('./getAllChocalates')

const app = express();

// app.use(express.json());

app.get('/chocolates/total', async (req, res) => {
    const data = await readChocolates();
    const { chocolates } = data;

    res.status(200).json({totalChocolates: chocolates.length});
})

module.exports = app;