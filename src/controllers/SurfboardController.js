const express = require('express');
const { Surfboard } = require('../models/SurfboardModel');
const router = express.Router();

router.get("/all", async (request, response) => {
    let result = await Surfboard.find({});

    response.json({
        surfbaords: result
    });
});

module.exports = router;