const teams = require('../utils/teams');

const existingId = (req, res, next) => {
    const { id } = req.params;
    const idAsNumber = Number(id);
    if (Number.isNaN(idAsNumber)) {
        res.status(400).send({ message: 'ID inválido! Precisa ser um número' });
    } 
    
    if (teams.some((team) => team.id === idAsNumber)) {
        next();
    } else {
        res.status(400).send({ message: 'ID não encontrado!' });
    }
};

module.exports = existingId;
