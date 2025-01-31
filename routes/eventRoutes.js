const express = require('express');
const router=express.Router();
const { authenticateToken } = require('../middleware/authenticateToken');
const { createEventHandler, getEventsHandler, updateEventsHandler, deleteEventsHandler, registerForEvents,getRegisteredEvents } = require('../controllers/eventController');
router.get("/events",authenticateToken,getEventsHandler);
router.post("/events",authenticateToken,createEventHandler);
router.post("/events/:id/register",authenticateToken,registerForEvents);
router.put('/events/:id', authenticateToken, updateEventsHandler);
router.delete('/events/:id', authenticateToken, deleteEventsHandler);
module.exports=router