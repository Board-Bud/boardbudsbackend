const express = require('express');
const { createSurfboard, updateSurfboard, deleteSurfboard, getAllSurfboards, getSurfboard } = require('../controllers/SurfboardController');
const { verifyToken, verifyUser, verifyAdmin } = require('../utils/verifyToken')

const router = express.Router();


// CREATE
router.post("/",verifyAdmin ,createSurfboard);

// UPDATE
router.put("/:id",verifyAdmin ,updateSurfboard);

// DELETE
router.delete("/:id",verifyAdmin, deleteSurfboard);

// GET
router.get("/:id", getSurfboard);

// GET ALL
router.get("/", getAllSurfboards);



module.exports = router;