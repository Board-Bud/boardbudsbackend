const express = require('express');
const { Surfboard } = require('../models/SurfboardModel');
const router = express.Router();

// Get all surfboards in the DB
router.get("/all", async (request, response) => {
    let result = await Surfboard.find.catch(error =>{return error});

    response.json({
        surfboards: result
    });
});

// Find one surfboard by its ID
router.get("/one/id/:id", async (request, response) => {
	let result = await Surfboard.find.catch(error =>{return error});

	response.json({
		surfboard: result
	});

});

// Find one surfboard by its name 
router.get("/multiple/name/:nameToSearchFor", async (request, response) => {
	let result = await Surfboard.find.catch(error =>{return error});

	response.json({
		surfboard: result
	});

});

// Find one or more surfboards by their type
router.get("/multiple/type/:typeToFilterBy", async (request, response) => {
	let result = await Surfboard.find.catch(error =>{return error});

	response.json({
		surfboard: result
	});

});


// Create a new surfbaord in the DB
// POST localhost:3000/surfboards/
router.post("/", async (request, response) => {

	

	// Error handling via Promise.catch()
	let result = await Surfboard.create(request.body).catch(error => {return error});
	

	response.json({
		surfboard: result
	});

});

// Update an existing surfboard in the DB.
// Find one surfboard by its ID, and modify that surfboard. 
router.patch("/:id", async (request, response) => {
	let result = await Surfboard.find({});

	response.json({
		surfboard: result
	});

});

// Find one surfboard by its ID,
// and delete it from the DB.
router.delete("/delete/:id", async (request, response) => {
	let result = await Surfboard.findById(request.body).catch(error => {return error});

	response.json({
		surfboard: result
	});

});




module.exports = router;