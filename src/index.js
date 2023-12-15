const dotenv = require('dotenv')
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const SurfboardRouter = require('./routes/surfboards');
const UserRouter = require('./routes/user');
const AuthRouter = require('./routes/auth');
const cors = require('cors');

const app = express();
dotenv.config();

const connect = async () => {
	try {
	  await mongoose.connect(process.env.DB_URI);
	  console.log("Connected to mongoDB.");
	} catch (error) {
	  throw error;
	}
  };
  
  mongoose.connection.on("disconnected", () => {
	console.log("mongoDB disconnected!");
  });


app.use(cors())
app.use(cookieParser());
app.use(express.json());

app.use('/surfboards', SurfboardRouter);
app.use("/users", UserRouter);
app.use("/auth", AuthRouter);


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

app.listen(3000, () => {
	connect();
	console.log("Connected to backend.");
  });