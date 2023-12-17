const express = require('express');
const dotenv = require('dotenv');



// make a server instance
const app = express();

const cors = require('cors');
const corsOptions = {
	//			frontend localhost,  frontend deployed
	origin: ["http://localhost:3000/","https://localhost:3000", "http://localhost:3001/","https://localhost:3001", "https://board-bud-c9fcbefcb666.herokuapp.com/"],
	optionsSuccessStatus: 200,
    credentials: true,
    preflightContinue: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH' , 'DELETE', 'OPTIONS']
};
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

app.use(express.json());



module.exports = {
    app
}