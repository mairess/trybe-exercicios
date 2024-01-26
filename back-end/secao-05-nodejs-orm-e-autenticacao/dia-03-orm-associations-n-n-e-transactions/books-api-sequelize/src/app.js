const express = require('express');

const app = express();

app.use(express.json());
app.get('/', (_req, res) => {
    res.status(200).json({ message: 'server up!' })
})

module.exports = app;

