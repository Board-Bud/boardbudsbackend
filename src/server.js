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

const userController = require('./controllers/UserController');
app.use("/users", userController);

// const BookingController = require('./controllers/BookingController');
// app.use("/bookings", BookingController);

module.exports = {
    app
}