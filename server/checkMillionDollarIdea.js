const {isValidIdea} = require('./db');

const checkMillionDollarIdea = (req, res, next) => {
    try {
        let idea = isValidIdea(req.body) ? req.body : null;
        if (idea) {
            let ideaWorth = idea.numWeeks * idea.weeklyRevenue;
            if (ideaWorth >= 1000000) {
                next();
            } else {
                res.status(400).send('Idea not worth a Million.');
            }
        } 
    } catch (error) {
        console.log(error);
        res.status(400).send('Idea not Valid');
    }
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
