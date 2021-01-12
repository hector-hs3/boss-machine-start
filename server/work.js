const express = require('express');
const workRouter = express.Router();

const {getAllFromDatabase, getFromDatabaseById, addToDatabase, 
    updateInstanceInDatabase, deleteFromDatabasebyId} = require('./db');

const modelType = 'work';

workRouter.param('workId', (req, res, next, id) => {
    let work = getFromDatabaseById(modelType, id);
    if (work) {
        req.workId = id;
        req.work = work;
        next();
    } else {
        res.status(404).send(`Work with ID: ${id} Not Found for minion: ${req.minionId}.`);
    }
})

workRouter.get('/', (req, res, next) => {
    let workArray = getAllFromDatabase(modelType);
    let minionWork = workArray.filter(work => work.minionId === req.minionId);
    res.send(minionWork);
})
workRouter.post('/', (req, res, next) => {
    req.body.minionId = req.minionId;
    res.status(201).send(addToDatabase(modelType, req.body));
})
workRouter.put('/:workId', (req, res, next) => {
    if (req.work.minionId === req.minionId) {
        req.body.minionId = req.minionId;
        res.send(updateInstanceInDatabase(modelType, req.body));
    } else {
        res.status(400).send('mismatch of minionId and workId');
    }
    
})
workRouter.delete('/:workId', (req, res, next) => {
    if (deleteFromDatabasebyId(modelType, req.workId)) {
        res.status(204).send();
    }
})

module.exports = workRouter;