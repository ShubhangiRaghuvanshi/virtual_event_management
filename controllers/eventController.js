const{createEvent, getAllEvents, getEventById, updateEvents, deleteEvent }=require("../models/events");
const { sendRegistrationEmail } = require('../services/emailService');

const createEventHandler = (req, res) => {
    try {
      const { title, description, date, time, maxParticipants = 100 } = req.body;
  
      // Validate input fields
      if (!title || !description || !date || !time) {
        return res.status(400).json({ message: "All fields are required" });
      }
  
      
      const newEvent = createEvent(title, description, date, time, maxParticipants);
  
      res.status(201).json({
        message: "Event created successfully",
        event: newEvent,
      });
    } catch (error) {
      console.error("Error creating event:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };
  
const getEventsHandler = (req, res) => {
    try {
      
        const events = getAllEvents(); 
      
        res.status(200).json({ events });  // Sending the events as a response
    } catch (err) {
        console.error("Error fetching events:", err);
        console.error("Error fetching events:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const updateEventsHandler=(req,res)=>{
    const{id}=req.params;
    const{details}=req.body;
    const event=updateEvents(Number(id),details);
    if (!event) return res.status(404).json({ message: 'Event not found' });
    res.status(200).json({message:"Event updated succesfully",event});

}
const deleteEventsHandler=(req,res)=>{
    const{id}=req.params;
    const event = deleteEvent(Number(id));
    if (!event) return res.status(404).json({ message: 'Event not found' });
    res.status(200).json({ message: 'Event deleted successfully', event });
}

const registerForEvents =async (req, res) => {
    console.log("Inside register for events");
    try {
    console.log(req.user);
        const eventId = parseInt(req.params.id);
        const userId = req.user.id; 
        const  email = req.user.email; 
        const event = getEventById(eventId);
        console.log(eventId);

        // If the event does not exist
        if (!event) {
            return res.status(404).json({ message: 'Event does not exist' });
        }

       
        if (event.participants.includes(userId)) {
            return res.status(400).json({ message: "User has already registered for the event" });
        }

        // If the event is full
        if (event.participants.length >= event.maxParticipants) {
            return res.status(400).json({ message: "Event is full" });
        }

        event.participants.push(userId);

       try {
      await sendRegistrationEmail(email, event.name, event.date);
    } catch (error) {
      console.error('Error sending confirmation email:', error);
      return res.status(500).send({ message: 'Registration successful, but email sending failed.' });
    }

    // Success response
    res.status(200).send({
      message: `Successfully registered for "${event.name}". A confirmation email has been sent to ${email}.`
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send({ message: 'Something went wrong' });
  }
};

const getRegisteredEvents = (req, res) => {
    try {
        const userId = req.user.id;
        console.log("User ID from token:", userId);
        const events=getAllEvents();
        console.log(events);
        
        const userEvents = events.filter(event => event.participants.includes(userId));
        console.log("User Events:", userEvents);

        if (userEvents.length === 0) {
            return res.status(404).json({ message: "No events found for this user" });
        }

        res.status(200).json({ userEvents });
    } catch (err) {
        console.error("Error fetching registered events:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


module.exports = { createEventHandler, getEventsHandler, updateEventsHandler, deleteEventsHandler,registerForEvents,getRegisteredEvents };