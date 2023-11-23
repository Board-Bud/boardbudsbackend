const express = require('express');

// make a server instance
const app = express();

app.get("/", (request, response) => {
    response.json({
        message:"BoardBud"
    });
});

module.exports = {
    app
}