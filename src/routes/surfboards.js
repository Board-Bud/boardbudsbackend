const express = require('express');
const { createSurfboard, updateSurfboard, deleteSurfboard, getAllSurfboards, getSurfboard } = require('../controllers/SurfboardController');

const router = express.Router();


// CREATE
router.post("/", createSurfboard);

// UPDATE
router.put("/:id",updateSurfboard);

// DELETE
router.delete("/:id", deleteSurfboard);

// GET
router.get("/:id", getSurfboard);

// GET ALL
router.get("/", getAllSurfboards);



module.exports = router;