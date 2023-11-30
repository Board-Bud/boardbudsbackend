const express = require('express');



// make a server instance
const app = express();

app.use(express.json());

app.get("/", (request, response) => {
    response.json({
        message:"BoardBud"
    });
});

const SurfboardRouter = require('./controllers/SurfboardController');
app.use('/surfboards', SurfboardRouter);

module.exports = {
    app
}