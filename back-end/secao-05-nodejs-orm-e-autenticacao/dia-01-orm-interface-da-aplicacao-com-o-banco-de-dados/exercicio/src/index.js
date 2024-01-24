const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const Book = require('./controllers/book.controller');

app.use(express.json());

app.get('/books', Book.getAll)
app.get('/books/:id', Book.getById)

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));