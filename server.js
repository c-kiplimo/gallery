const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv');
const config = require('./_config'); // Import the config file

dotenv.config(); // Load environment variables from .env file

// Determine the current environment
const env = process.env.NODE_ENV || 'development';
const mongodb_url = config.mongoURI[env];

// Connect to the database
mongoose.connect(mongodb_url, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.log('Error connecting to the database:', err);
    }
});

// Test if the database has connected successfully
const db = mongoose.connection;
db.once('open', () => {
    console.log('Database connected successfully');
});

// Initialize the app
const app = express();

// View Engine
app.set('view engine', 'ejs');

// Set up the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware
app.use(express.json());

// Define routes
const index = require('./routes/index');
const image = require('./routes/image');

// Use routes
app.use('/', index);
app.use('/image', image);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});
