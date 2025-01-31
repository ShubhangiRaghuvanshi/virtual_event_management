const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middleware/authenticateToken');
const { authenticateAdmin } = require('../middleware/authenticateAdmin');
const { getEventsHandler } = require('../controllers/adminController');


router.get('/admin/events', authenticateToken, authenticateAdmin, getEventsHandler);

module.exports = router;
