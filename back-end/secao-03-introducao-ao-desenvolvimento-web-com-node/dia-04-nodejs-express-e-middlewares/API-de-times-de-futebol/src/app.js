const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
require('express-async-errors'); 
const morgan = require('morgan');
const validateTeam = require('./middlewares/validateTeam');
const existingId = require('./middlewares/existingId');
const teams = require('./utils/teams');
const apiCredentials = require('./middlewares/apiCredentials');

const app = express();

const limiter = rateLimit({
    max: 100, 
    windowMs: 15 * 60 * 1000,
    message: 'Muitas requisições originadas desta IP',
 });

app.use(morgan('dev'));
app.use(express.static('./images'));
app.use(express.json());
app.use(apiCredentials);
app.use(cors());
app.use(helmet());
app.use(limiter);

app.use((req, _res, next) => {
    console.log('req.method:', req.method);
    console.log('req.path:', req.path);
    console.log('req.params:', req.params);
    console.log('req.query:', req.query);
    console.log('req.headers:', req.headers);
    console.log('req.body:', req.body);
    next();
  });

let nextId = 3;

app.get('/teams', (req, res) => res.json(teams));

app.get('/teams/:id', existingId, (req, res) => {
    const id = Number(req.params.id);
    const team = teams.find((t) => t.id === id);
        res.json(team);
});
  
  app.post('/teams', validateTeam, (req, res) => {
    if (
      !req.teams.teams.includes(req.body.sigla)
      && teams.every((t) => t.sigla !== req.body.sigla)
    ) {
      return res.status(422).json({ message: 'Já existe um time com essa sigla' });
    }
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

app.use((req, res) => res.sendStatus(404));

module.exports = app;
