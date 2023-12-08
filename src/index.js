require('dotenv').config();

const { databaseConnect } = require('./database');
const { app } = require('./server');


const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
	await databaseConnect();
	console.log("Server running!");
});

const SurfboardRouter = require('./routes/surfboards');
app.use('/surfboards', SurfboardRouter);

const UserRouter = require('./routes/users');
app.use("/users", UserRouter);


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