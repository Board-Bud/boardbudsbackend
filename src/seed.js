require('dotenv').config();
const { default: mongoose } = require('mongoose');
const { databaseConnect } = require('./database');
const { Surfboard } = require('./models/SurfboardModel');
const { User } = require('./models/UserModel');

databaseConnect().then(async () => {
    console.log("Creating seed data");

    let newSurfBoard = new Surfboard({
        name: "Mick Fanning Beastie 9 Foot",
        type: "Foam Surfboard",
        description: "This a Mick Fanning Beastie 9 Foot. This board is a create startng point for a beginner surfer due to its size and boyancy",
        hirePrice: "100",
        photo: ["https://google.com"] // URL to file storage, this is an example
    })

    await newSurfBoard.save().then(() => {
        console.log(`${newSurfBoard.name} is in the DB`);
    });
    


    let newUser = await User.create({
        name: "Nick",
        email: "nick@email.com",
        username: "Nick94",
        password: "password123",
        isAdmin: false
    });
    
   
}).then(async () => {

})