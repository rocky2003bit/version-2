const express = require('express');
const router = express.Router();
const { signup, signin, forgotPassword } = require('../controllers/authController');

// Signup route
router.post('/signup', signup);

// Signin route ✅
router.post('/signin', signin);

router.post('/forgot-password', forgotPassword);


module.exports = router;
