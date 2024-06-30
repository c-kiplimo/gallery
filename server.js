const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv');
const config = require('./_config'); 

dotenv.config(); 

const env = process.env.NODE_ENV || 'development';
const mongodb_url = config.mongoURI[env];

mongoose.connect(mongodb_url, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
    } else {
        console.log('Database connected successfully');
    }
});

const db = mongoose.connection;
db.once('open', () => {
    console.log('Database connected successfully');
});

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

const index = require('./routes/index');
const image = require('./routes/image');

app.use('/', index);
app.use('/image', image);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});
