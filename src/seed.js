require('dotenv').config();
const { default: mongoose } = require('mongoose');
const { databaseConnect } = require('./database');

databaseConnect().then(async () => {
    console.log("Creating seed data");

    const User = mongoose.model('User', {
        name: String,
        email: String,
        username: String,
        password: String,
    })


    const SurfBoard = mongoose.model('SurfBoard', {
            name: String,
            type: String,
            description: String,
            price: Number,
            photo: [String] // URL to file storage
        })


    let newSurfBoard = new SurfBoard({
        name: "Mick Fanning Beastie 9 Foot",
        type: "Foam Surfboard",
        description: "This a Mick Fanning Beastie 9 Foot. This board is a create startng point for a beginner surfer due to its size and boyancy",
        price: "100",
        // photo: [String] // URL to file storage
    })

    await newSurfBoard.save().then(() => {
        console.log(`${newSurfBoard.name} is in the DB`);
    });
    

    
    let newUser = await User.create({
        name: "Nick",
        email: "nick@email.com",
        username: "Nick94",
        password: "password123",
    });
    
   
   
}).then(async () => {

})