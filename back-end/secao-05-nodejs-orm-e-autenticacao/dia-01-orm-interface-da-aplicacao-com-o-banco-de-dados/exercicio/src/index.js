const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.get('/user/:id', (req, res) => {
    const theId = { id } = req.params; 
    res.send({ message: `backend is up! And you pass id ${id}` })
})

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));