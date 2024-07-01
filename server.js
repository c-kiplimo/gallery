const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
<<<<<<< HEAD
const dotenv = require('dotenv');
const config = require('./_config'); 
=======
const config = require('./_config');
>>>>>>> test

dotenv.config(); 

<<<<<<< HEAD
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
=======
// Initializing the app
const app = express();

// connecting the database

const MONGODB_URI = process.env.MONGODB_URI || config.mongoURI[app.settings.env]
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true  },(err)=>{
    if (err) {
        console.log(err)
    }else{
        console.log(`Connected to Database: ${MONGODB_URI}`)
    }
});

// test if the database has connected successfully
// let db = mongoose.connection;
// db.once('open', ()=>{
//     console.log('Database connected successfully')
// })


>>>>>>> test

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

const index = require('./routes/index');
const image = require('./routes/image');

app.use('/', index);
app.use('/image', image);

const PORT = process.env.PORT || 5000;
<<<<<<< HEAD
app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});
=======
app.listen(PORT,() =>{
    console.log(`Server is listening at http://localhost:${PORT}`)
});


module.exports = app;
>>>>>>> test
