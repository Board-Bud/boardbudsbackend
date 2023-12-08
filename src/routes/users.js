const express = require('express');
const { User } = require('../models/UserModel')
const { comparePassword, generateJwt } = require('../functions/userAuthFunctions');

const router = express.Router();

// CREATE

router.post("/", async (request, response) => {
	let newUser = await User.create(request.body).catch(error => error);

	response.json(newUser);
})

// LOGIN

// POST localhost:3000/users/login
// request.body = {username: "admin", password: "Password1"}
// respond with {jwt: "laskdnalksfdnal;fgvkmsngb;sklnmb", valid: true}

router.post("/login", async (request, response) => {
	// Find user by provided username 
	let targetUser = await User.findOne({username: request.body.username}).catch(error => error);

	// Check if user provided the correct password
	let isPasswordCorrect = await comparePassword(request.body.password, targetUser.password);

	if (!isPasswordCorrect){
		response.status(403).json({error:"You are not authorised to do this!"});
	}

	// If they provided the correct, generate a JWT
	let freshJwt = generateJwt(targetUser._id.toString());

	// respond with the JWT 
	response.json({
		jwt: freshJwt
	});

});

// UPDATE

// DELETE

// GET

router.get("/:id", async (request, response) => {
	let result = await User.findOne({_id: request.params.id});

	response.json({result});
})

// GET ALL

router.get("/", async (request, response) => {
	let result = await User.find({});

	response.json({result});
})


// module.exports = router;

// import Express library


// make an instance of a Router

module.exports = router;