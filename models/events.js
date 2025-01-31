const events=[];
const createEvent = (title, description, date, time, maxParticipants = 100,participants=[]) => {
    const event = {
      id: events.length + 1,
      title,
      description,
      date,
      time,
      maxParticipants,
      participants: []  // Initialize participants as an empty array
    };
  
    events.push(event);
    console.log('Event Created:', event);  // Log the newly created event
    console.log('All Events:', events); 
    return event;
  };
const getAllEvents=()=>{
    return events;
}
const getEventById = (id) => {
    console.log(events);
    return events.find((event) => event.id === id);  // Ensure you return the result
};

const updateEvents=(id,details)=>{
    const index=events.findIndex((event)=>event.id===id);
    if(index!==-1)
    {
        events[index]={...events[index],...details};
        return events[index];
    }
    return null;

}

const deleteEvent=(id)=>{
  const index=  events.findIndex((e)=>e.id===id);
  if (index !== -1) {
    return events.splice(index, 1)[0];
}
return null;

};
module.exports = { createEvent, getAllEvents, getEventById, updateEvents, deleteEvent };