const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SurfboardSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
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

const User = mongoose.model('Surfboard', SurfboardSchemaSchema);

module.exports = {
    Surfboard
}