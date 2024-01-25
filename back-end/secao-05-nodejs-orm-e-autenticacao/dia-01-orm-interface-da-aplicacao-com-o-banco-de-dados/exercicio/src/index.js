const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const BooksController = require('./controllers/book.controller');

app.use(express.json());

app.get('/books', BooksController.getAll)
app.get('/books/:id', BooksController.getById)
app.post('/books', BooksController.createBook)
app.put('/books/:id', BooksController.updateBook)
app.delete('/books/:id', BooksController.deleteBook)
app.get('/books/search', BooksController.getByAuthor)

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));