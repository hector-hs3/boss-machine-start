const express = require('express');
const ideasRouter = express.Router();

const {getAllFromDatabase, getFromDatabaseById, addToDatabase, 
    updateInstanceInDatabase, deleteFromDatabasebyId} = require('./db');

const checkMillionDollarIdea = require('./checkMillionDollarIdea');

const modelType = 'ideas';

ideasRouter.param('ideaId', (req, res, next, id) => {
    let idea = getFromDatabaseById(modelType, id);
    if (idea) {
        req.ideaId = id;
        req.idea = idea;
        next();
    } else {
        res.status(404).send(`Idea with ID: ${id} Not Found.`)
    }
})

ideasRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase(modelType));
})
ideasRouter.post('/', checkMillionDollarIdea, (req, res, next) => {
    res.status(201).send(addToDatabase(modelType, req.body));
})
ideasRouter.get('/:ideaId', (req, res, next) => {
    res.send(req.idea);
})
ideasRouter.put('/:ideaId', checkMillionDollarIdea, (req, res, next) => {
    res.send(updateInstanceInDatabase(modelType, req.body));
})
ideasRouter.delete('/:ideaId', (req, res, next) => {
    if (deleteFromDatabasebyId(modelType, req.ideaId)) {
        res.status(204).send();
    }
})
module.exports = ideasRouter;
