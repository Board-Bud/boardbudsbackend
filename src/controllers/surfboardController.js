const express = require('express');
const { Surfboard } = require ("../models/SurfboardModel");

// CREATE
const createSurfboard = async (req,res,next) => {
    const newSurfboard = new Surfboard(req.body)

    try{
        const savedSurfboard = await newSurfboard.save()
        res.status(200).json(savedSurfboard)
    }catch(err){
        next(err);
    };
};

// UPDATE
const updateSurfboard = async (req,res,next) => {
    try{
        const updatedSurfboard = await Surfboard.findByIdAndUpdate (
            req.params.id, 
            { $set: req.body},
            { new: true}
        );
        res.status(200).json(updatedSurfboard);
    } catch (err) {
        next(err);
    };
};

// DELETE
const deleteSurfboard = async (req,res,next) => {
    try{
        const deleteSurfboard = await Surfboard.findByIdAndDelete (
            req.params.id,
        );
        res.status(200).json("Surfboard has been deleted");
    } catch (err) {
        next(err);
    };
};

// GET
const getSurfboard = async (req,res,next) => {
    try{
        const surfboard = await Surfboard.findById (
            req.params.id
        );
        res.status(200).json(surfboard);
    } catch (err) {
        res.status(500).json(err);
    };
};

// GETALL
const getAllSurfboards = async (req,res,next) => {
    try{
        const surfboards = await Surfboard.find();
        res.status(200).json(surfboards);
    } catch (err) {
        next(err);
    };
};

module.exports = {
    createSurfboard,
    updateSurfboard,
    deleteSurfboard,
    getSurfboard,
    getAllSurfboards
}