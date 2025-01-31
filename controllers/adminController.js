const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require ('dotenv' ).config();
const events=require('../models/events');

const getEventsHandler = (req, res) => {
    try {
      
       
      
        res.status(200).json({ events }); 
    } catch (err) {
     
        console.error("Error fetching events:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};



module.exports={getEventsHandler}