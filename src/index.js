require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const SurfboardRouter = require('./routes/surfboards');
const UserRouter = require('./routes/user');
const AuthRouter = require('./routes/auth');

const { databaseConnect } = require('./database');
const { app } = require('./server');


const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
	await databaseConnect();
	console.log(`Server is running on port ${PORT}`);
});

app.use(cookieParser());

app.use('/surfboards', SurfboardRouter);
app.use("/users", UserRouter);
app.use("/auth", AuthRouter);

app.get("/", (request, response) => {
    response.json({
        message:"BoardBud"
    });
});



// Error Handling Middleware
app.use((err,req,res,next)=>{
	const errorStatus = err.status || 500;
	const errorMessage = err.message || "Something went wrong";
	return res.status(errorStatus).json({
		success: false,
		status: errorStatus,
		message: errorMessage,
		stack: err.stack
	});
});