const mongoose = require('mongoose');


const SurfboardSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: false
    },
    type: {
        type: String,
        required: true,
        unique: false
    },
    description: {
        type: String,
        required: true,
        unique: false
    },
    hirePrice: {
        type: Number,
        required: true,
        unique: false
    },
    photo: {
        type: [String],
        required: false,
        unique: false
    }
})

const Surfboard = mongoose.model('Surfboard', SurfboardSchema);

module.exports = {
    Surfboard
}