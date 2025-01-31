require('dotenv').config(); // Load environment variables
const express = require('express');
const cors = require('cors');

// Import routes
const authRoutes = require('./routes/authRoutes');
const eventRoutes = require('./routes/eventRoutes');
const adminRoutes=require('./routes/adminRoutes');

// Initialize the app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());  // No need for bodyParser.json(), express.json() is enough

// Base Routes
app.use('/api/v1', authRoutes);
app.use('/api/v1', eventRoutes);
app.use('/api/v1', adminRoutes);

// Root Endpoint
app.get('/', (req, res) => {
  res.send('Welcome to the Virtual Event Management Platform API');
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  console.log('Request received:', req.method, req.url);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Start the Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
