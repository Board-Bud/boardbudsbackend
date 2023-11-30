const express = require('express');
const { Surfboard } = require('../models/SurfboardModel');
const router = express.Router();

router.get("/all", async (request, response) => {
    let result = await Surfboard.find({});

    response.json({
        surfboards: result
    });
});

// Find one surfboard by its ID
router.get("/one/id/:id", async (request, response) => {
	let result = null;

	response.json({
		surfboard: result
	});

});

// Find one surfbaord by its name 
// localhost:3000/surfbaords/one/name/MickFanningBeastie
router.get("/multiple/name/:nameToSearchFor", async (request, response) => {
	let result = null;

	response.json({
		surfboard: result
	});

});

router.get("/multiple/type/:typeToFilterBy", async (request, response) => {
	let result = null;

	response.json({
		surfboard: result
	});

});


// Create a new surfbaord in the DB
// POST localhost:3000/cats/
router.post("/", async (request, response) => {

	// Error handling via try-catch
	// let result = null;
	// try {
	// 	result = await Surfboard.create(request.body);
	// } catch (error) {
	// 	result = error;
	// }

	// Error handling via Promise.catch()
	let result = await Surfboard.create(request.body).catch(error => {return error});
	

	response.json({
		surfboard: result
	});

});

// Update an existing surfboard in the DB.
// Find one surfboard by its ID, and modify that surfboard. 
// Patch is for whatever properties are provided,
// does not overwrite or remove any unmentioned properties of the surfboard
router.patch("/:id", async (request, response) => {
	let result = null;

	response.json({
		surfboard: result
	});

});

// Find one surfboard by its ID,
// and delete it from the DB.
router.delete("/:id", async (request, response) => {
	let result = null;

	response.json({
		surfboard: result
	});

});




module.exports = router;