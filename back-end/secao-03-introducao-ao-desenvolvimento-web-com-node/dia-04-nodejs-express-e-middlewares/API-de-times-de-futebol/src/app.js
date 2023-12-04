const express = require('express');
const validateTeam = require('./middlewares/validateTeam');
const existingId = require('./middlewares/existingId');
const teams = require('./utils/teams');

const app = express();

app.use(express.json());

let nextId = 3;

app.get('/teams', (req, res) => res.json(teams));

app.get('/teams/:id', existingId, (req, res) => {
    const id = Number(req.params.id);
    const team = teams.find((t) => t.id === id);
        res.json(team);
});
  
  // Arranja os middlewares para chamar validateTeam primeiro
app.post('/teams', validateTeam, (req, res) => {
    const team = { id: nextId, ...req.body };
    teams.push(team);
    nextId += 1;
    res.status(201).json(team);
});
  
app.put('/teams/:id', validateTeam, existingId, (req, res) => {
    const id = Number(req.params.id);
    const team = teams.find((t) => t.id === id);
    const index = teams.indexOf(team);
    const updated = { id, ...req.body };
    teams.splice(index, 1, updated);
    res.status(201).json(updated);
});

app.delete('/teams/:id', (req, res) => {
    const id = Number(req.params.id);
    const team = teams.find((t) => t.id === id);
    const index = teams.indexOf(team);
    teams.splice(index, 1);
    res.sendStatus(204);
});

module.exports = app;
