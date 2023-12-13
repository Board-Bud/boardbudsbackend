const express = require('express');
const { updateUser, deleteUser, getAllUsers, getUser } = require('../controllers/userController');
const { verifyToken, verifyUser, verifyAdmin } = require('../utils/verifyToken')



const router = express.Router();

// // CHECK AUTH
// router.get("/checkauthentication", verifyToken, (req,res,next) =>{
//     res.send(`Hello user, you are logged in`)
// });

// router.get("/checkuser/:id", verifyUser, (req,res,next) =>{
//     res.send(`Hello user, you are logged in and  you can delete your account`)
// });

// router.get("/checkadmin/:id", verifyAdmin, (req,res,next) =>{
//     res.send(`Hello admin, you are logged in and  you can delete all accounts`)
// });

// UPDATE
router.put("/:id", verifyUser, updateUser);

// DELETE
router.delete("/:id", verifyUser, deleteUser);

// GET
router.get("/:id", verifyUser, getUser);

// GET ALL
router.get("/", verifyAdmin, getAllUsers);



module.exports = router;