const express = require('express');



// make a server instance
const app = express();

const cors = require('cors');
const corsOptions = {
	//			frontend localhost,  frontend deployed
	origin: ["http://localhost:3000/","https://localhost:3000", "http://localhost:3001/","https://localhost:3001", "https://board-bud-c9fcbefcb666.herokuapp.com/"],
	optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

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