const express = require('express');
const { register, login } = require('../controllers/authController');

const router = express.Router();

// REGISTER/CREATE
router.get("/register", register);
router.get("/login", login);


module.exports = router;
