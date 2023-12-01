const fs = require('fs').promises;
const path = require('path');
const readFileAsync = require('./readFileAsync');
const writeFileASync = require('./writeFileASync');

async function updateFileAsync(data) {
    try{
        const existingMovies = await readFileAsync();

        const existingMovieIndex = existingMovies
        .findIndex((movie) => movie.movie === data.movie);

        if (existingMovieIndex !== -1) {
            existingMovies[existingMovieIndex] = data;
            await writeFileASync(existingMovies)
        } else {
            console.error(`Filme não encontrado: ${data.movie}`);
        }

    } catch(error) {
        console.error(`Erro ao escrever o arquivo: ${error.message}`);
    }

};

module.exports = updateFileAsync;
