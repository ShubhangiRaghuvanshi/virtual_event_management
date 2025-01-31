Virtual Event Management Backend

Project Description

This backend system is designed for a virtual event management platform. It provides features for user registration, secure authentication, event creation, and participant management. The system supports RESTful API endpoints for interacting with in-memory data structures or a database of your choice.

Features

User Authentication:

User registration and login using bcrypt for password hashing.

JWT for token-based authentication.

Event Management:

CRUD operations for events (Create, Read, Update, Delete).

Fields include date, time, description, and participants.

Participant Management:

Users can register for events.

Attendee lists are maintained in memory.

Email Notifications:

Users receive email notifications upon successful event registration.

Endpoints

User Authentication

POST /register - Register a new user.

POST /login - Authenticate a user and return a JWT.

Event Management

GET /events - Fetch a list of all events.

POST /events - Create a new event (Authorized users only).

PUT /events/:id - Update event details (Authorized users only).

DELETE /events/:id - Delete an event (Authorized users only).

Event Registration

POST /events/:id/register - Register for a specific event.

Installation

Clone the repository:

git clone <your-repository-url>
cd <repository-name>

Install dependencies:

npm install

Set up environment variables:
Create a .env file in the root directory and provide the following variables:

PORT=3000
JWT_SECRET=your_jwt_secret
EMAIL_SERVICE=your_email_service
EMAIL_USER=your_email_user
EMAIL_PASS=your_email_password

Start the server:

npm start

Run tests:

npm run test

Dependencies

Express.js: Web framework for Node.js.

bcrypt: Password hashing.

jsonwebtoken: Token-based authentication.

nodemailer: Email notifications.

dotenv: Environment variable management.
