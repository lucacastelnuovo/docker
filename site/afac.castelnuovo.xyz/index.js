require('dotenv').config();
const express = require('express');
const createError = require('http-errors');

const app = express();
const port = 3000;

const lookupRouter = require('./routes/lookup');
const actionRouter = require('./routes/action');
const verifyRouter = require('./routes/verify');

app.use(express.json());

// GET / - show ui
//  show option to lookup bike
//      also show option to subscribe to updates
//  show option to subscribe bike
//  show option to unsubscribe bike

// TODO: Ratelimit, Captcha
app.use('/lookup/:frameNumber', lookupRouter); // GET,  Ratelimit
app.use('/action/:action', actionRouter); // POST, Captcha
app.use('/verify/:token', verifyRouter);
app.use((req, res, next) => next(createError(404)));

// error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send(`Error ${err.status} - ${err.message}`);
});

app.listen(port, () => {
    console.log(`Listening on ${port}`);
});
