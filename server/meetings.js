const express = require('express');
const meetingsRouter = express.Router();

const {createMeeting, getAllFromDatabase, addToDatabase, deleteAllFromDatabase} = require('./db');

const modelType = 'meetings';

meetingsRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase(modelType));
})
meetingsRouter.post('/', (req, res, next) => {
    let meeting = createMeeting();
    res.status(201).send(addToDatabase(modelType, meeting));
})
meetingsRouter.delete('/', (req, res, next) => {
    let meetingsArray = deleteAllFromDatabase(modelType);
    res.status(204).send(meetingsArray);
})
module.exports = meetingsRouter;
