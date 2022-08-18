require('./database/connect');
require('dotenv').config();

const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connecDatabase = require('./database/connect');
const port = 3000;
const notFound = require('./middleware/not-found');

// middleware
app.use(express.static('./public'));
app.use(express.json());

//routes
app.use('/api/v1/tasks',tasks);
app.use(notFound);



const start = async () => {
    try {
        await connecDatabase(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`Server listening on port ${port}...`);
        })}
        catch (error) {
            console.log(error);
        }
     }

start();