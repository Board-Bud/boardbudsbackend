const express = require('express');
const { updateUser, deleteUser, getAllUsers, getUser } = require('../controllers/userController');

const router = express.Router();


// UPDATE
router.put("/:id",updateUser);

// DELETE
router.delete("/:id", deleteUser);

// GET
router.get("/:id", getUser);

// GET ALL
router.get("/", getAllUsers);



module.exports = router;