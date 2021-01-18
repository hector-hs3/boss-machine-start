# Boss Machine

## Project Overview

The skeleton of this project was provided by CodeAcademy as a means to practice back end topics like API's, routers, and route design. 

The concept of the web app itself is that of a _**Boss Machine**_, a unique management application for today's most accomplished (evil) entrepreneurs. Boss Machines Users can manage their 'minions', find brilliant 'million dollar ideas', and handle meetings that keep getting added to their busy schedule.

## Concepts Learned:

- Set up body-parsing middleware with the `body-parser` package.
- Set up CORS middleware with the `cors` package.
- Set up logging middleware with `morgan` package.
- Designed and Implemented API Routes and Routers
- Properly validated POST and PUT request bodies.
- Designed and Implemented Middleware for checking *"million dollar ideas"*


## Technologies Practiced:
- Node.js
- Express


---
## Launching Project

Once downloaded, run `npm install` to install the dependencies of this project and build the front-end application. 

Once it has finished installing, run `npm run start` to begin your server. 

To see the application, open **index.html** in a web browser.

## Testing

A testing suite was provided by CodeAcademy that checks for all essential functionality and edge cases.

To run these tests, run `npm run test`. 

Output will list all tests that ran with information about whether or not each test passed. After this list, there is more specific information about why each failing test failed. 

---
## Summary of API Routes Implemented

- `/api/minions`
  - GET returns array of all minions.
  - POST creates a new minion and saves it to the database, returns minion object.
- `/api/minions/:minionId`
  - GET returns a single minion by id.
  - PUT updates a single minion by id, returns minion object.
  - DELETE deletes a single minion by id from the database.
- `/api/minions/:minionId/work`
  - GET returns an array of all work for the specified minion.
  - POST creates a new work object and saves it to the database, returns work object.
- `/api/minions/:minionId/work/:workId`
  - PUT updates a single work by id, returns work object.
  - DELETE deletes a single work by id from the database.
- `/api/ideas`
  - GET returns an array of all ideas.
  - POST creates a new idea and saves it to the database, returns an idea object.
- `/api/ideas/:ideaId`
  - GET returns a single idea by id.
  - PUT updates a single idea by id, returns an idea object.
  - DELETE deletes a single idea by id from the database.
- `/api/meetings`
  - GET returns an array of all meetings.
  - POST creates a new meeting and saves it to the database (no body required).
  - DELETE deletes _**all**_ meetings from the database.
