const express = require('express');
const data = require('./data');

const app = express();

app.get('/', (req, res) => res.status(200).json({ message: 'olá mundo!' }));

app.get('/cabron', (req, res) => res.status(200).json({ message: data }));

app.get('/hello-world', (req, res) => res.send('<h1>Olá Mundo!</h1>'));

app.get('/go-trybe', (req, res) => res.redirect('https://www.betrybe.com'));

module.exports = app;
