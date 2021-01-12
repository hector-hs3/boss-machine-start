const express = require('express');
const minionsRouter = express.Router();

const {getAllFromDatabase, getFromDatabaseById, addToDatabase, 
    updateInstanceInDatabase, deleteFromDatabasebyId} = require('./db');

const modelType = 'minions';

minionsRouter.param('minionId', (req, res, next, id) => {
    let minion = getFromDatabaseById(modelType, id);
    if (minion) {
        req.minionId = id;
        req.minion = minion;
        next();
    } else {
        res.status(404).send(`Minion with ID: ${id} Not Found.`);
    }
})

minionsRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase(modelType));
})
minionsRouter.post('/', (req, res, next) => {
    res.status(201).send(addToDatabase(modelType, req.body));
})
minionsRouter.get('/:minionId', (req, res, next) => {
    res.send(req.minion);
})
minionsRouter.put('/:minionId', (req, res, next) => {
    res.send(updateInstanceInDatabase(modelType, req.body));
})
minionsRouter.delete('/:minionId', (req, res, next) => {
    if (deleteFromDatabasebyId(modelType, req.minionId)) {
        res.status(204).send();
    }
})

const workRouter = require('./work');
minionsRouter.use('/:minionId/work', workRouter);

module.exports = minionsRouter;
