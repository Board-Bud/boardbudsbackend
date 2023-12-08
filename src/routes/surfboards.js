const express = require('express');
const { Surfboard } = require ("../models/SurfboardModel");

const router = express.Router();


// CREATE

router.post("/", async (req, res)=>{

    const newSurfboard = new Surfboard(req.body)

    try{
        const savedSurfboard = await newSurfboard.save()
        res.status(200).json(savedSurfboard)
    }catch(err){
        res.status(500).json(err)
    };
});

// UPDATE

router.put("/:id", async (req, res) => {
    try{
        const updatedSurfboard = await Surfboard.findByIdAndUpdate (
            req.params.id, 
            { $set: req.body},
            { new: true}
        );
        res.status(200).json(updatedSurfboard);
    } catch (err) {
        res.status(500).json(err);
    }
});

// DELETE

router.delete("/:id", async (req, res) => {
    try{
        const deleteSurfboard = await Surfboard.findByIdAndDelete (
            req.params.id,
        );
        res.status(200).json("Surfboard has been deleted");
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET

router.get("/:id", async (req, res) => {
    try{
        const surfboard = await Surfboard.findById (
            req.params.id
        );
        res.status(200).json(surfboard);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET ALL

router.get("/", async (req, res) => {
    try{
        const surfboards = await Surfboard.find();
        res.status(200).json(surfboards);
    } catch (err) {
        res.status(500).json(err);
    }
});



module.exports = router;