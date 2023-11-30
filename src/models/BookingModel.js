const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookingSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    dateBooked: {
        type: Date,
        required: true,
        unique: false
    },
    dateToReturn: {
        type: Date,
        required: true,
        unique: false
    }
})

const Booking = mongoose.model('Booking', BookingSchema);

module.exports = {
    Booking
}