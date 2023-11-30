const express = require('express');
// const teams = require('./teams');

const app = express();

app.use(express.json());

const teams = [
    {
      id: 1,
      name: 'São Paulo Futebol Clube',
      initials: 'SPF',
    },
    {
      id: 2,
      name: 'Clube Atlético Mineiro',
      initials: 'CAM',
    },
  ];

app.get('/', (req, res) => res.status(200).json({ message: 'olá mundo!' }));

app.get('/teams', (req, res) => res.status(200).json({ teams }));

app.get('/hello-world', (req, res) => res.send('<h1>Olá Mundo!</h1>'));

app.get('/go-trybe', (req, res) => res.redirect('https://www.betrybe.com'));

app.post('/teams', (req, res) => {
    const newTeam = { ...req.body };
    teams.push(newTeam);
    res.status(201).json({ team: newTeam });
});

app.put('/teams/:id', (req, res) => {
    const { id } = req.params;
    const { name, initials } = req.body;

    const updateTeam = teams.find((team) => team.id === Number(id));
    
    if (!updateTeam) {
        return res.status(404).json({ message: 'Team not found!' });
    }

    updateTeam.name = name;
    updateTeam.initials = initials;
    res.status(200).json({ updateTeam });
});

app.get('/teams/:id', (req, res) => {
    const { id } = req.params;
    const theTeam = teams.find((team) => team.id === Number(id));

    if (!theTeam) {
        return res.status(404).json({ message: 'Team not found!' });
    }

    res.status(200).json(theTeam);
});

app.delete('/teams/:id', (req, res) => {
    const { id } = req.params;
    const theTeamPosition = teams.findIndex((team) => team.id === Number(id));
    teams.splice(theTeamPosition, 1);

    if (!theTeamPosition) {
        return res.status(404).json({ message: 'Team not found!' });
    }

    res.status(200).end();
});

module.exports = app;
