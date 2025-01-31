const express = require('express');
const router=express.Router();
const { registerUser, loginUser } = require('../controllers/authController');
const {getRegisteredEvents}=require('../controllers/eventController');
const { authenticateToken } = require('../middleware/authenticateToken');


router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/me/events', authenticateToken, getRegisteredEvents);

module.exports = router;
