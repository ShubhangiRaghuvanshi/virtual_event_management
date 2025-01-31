Virtual Event Management Platform
This is a backend system for a Virtual Event Management Platform that focuses on user registration, event scheduling, and participant management. The platform is built using Node.js and Express.js, and it offers secure user authentication using bcrypt for password hashing and JWT for session management.

Features
User Authentication: Users can register and log in securely. Passwords are hashed using bcrypt, and JWT tokens are used for session management.
Event Management: Event organizers can create, update, and delete events. Event details include date, time, description, and participants.
Participant Management: Users can register for events, and their registrations are managed in-memory.
RESTful API Endpoints: The platform provides various endpoints to manage users, events, and registrations.
Installation
Follow these steps to set up the project locally:

Clone the repository:
git clone https://github.com/ShubhangiRaghuvanshi/virtual-event-management.git
Navigate to the project directory:

cd virtual-event-management
Install dependencies:
npm install
Create a .env file in the root directory and add your environment variables:


JWT_SECRET=your-secret-key
Start the server:


npm start
The server will be running at http://localhost:3000.
Technologies Used
Node.js
Express.js
bcrypt for password hashing
jsonwebtoken (JWT) for session management
Nodemailer for sending confirmation emails
In-memory data structures for storing user and event data

