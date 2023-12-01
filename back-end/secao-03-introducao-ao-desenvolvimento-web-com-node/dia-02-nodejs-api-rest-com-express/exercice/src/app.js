const express = require('express');
const readFileAsync = require('./readFileAsync');
const writeFileASync = require('./writeFileASync');

const app = express();

app.use(express.json());

app.get('/movies/search', async (req, res) => {
    const { q } = req.query;
    const movies = await readFileAsync();
    
    const filteredData = movies.filter((m) => m.movie.toLowerCase() === q.toLowerCase());
    
    res.status(200).json(filteredData);
});

app.get('/movies', async (req, res) => {
    const movies = await readFileAsync();
    res.status(200).json({ movies });
});

app.get('/movies/:id', async (req, res) => {
    const { id } = req.params;
    const movies = await readFileAsync();

    const movie = movies.find((m) => m.id === Number(id));

    res.status(200).json({ movie });
});

app.post('/movies', async (req, res) => {
    const newMovie = { ...req.body };
    const movies = await readFileAsync();
    const maxId = Math.max(...movies.map((movie) => movie.id));
    newMovie.id = maxId + 1;
    movies.push(newMovie);
    await writeFileASync(movies);
    res.status(201).json({ newMovie });
});

app.put('/movies/:id', async (req, res) => {
    const { id } = req.params;
    const { movie, price } = req.body;
    const movies = await readFileAsync();

    const movieIndex = movies.findIndex((m) => m.id === Number(id));

    movies[movieIndex] = { id: Number(id), movie, price };
    await writeFileASync(movies);

    res.status(200).json({ movie: movies[movieIndex] });
});

module.exports = app;