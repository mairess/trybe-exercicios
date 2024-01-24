const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const Book = require('./controllers/book.controller');

app.use(express.json());

app.get('/books', Book.getAll)
app.get('/books/:id', Book.getById)
app.post('/books', Book.createBook)
app.put('/books/:id', Book.updateBook)
app.delete('/books/:id', Book.deleteBook)

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));