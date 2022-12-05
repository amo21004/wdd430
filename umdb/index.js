const express = require('express');

const app = express();

require('dotenv').config();

app.use(require('cors')());

const body_parser = require('body-parser');

app.use(body_parser.json());

app.use(body_parser.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

app.listen(port);

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI,
   (error) => {
      if (error) {
         console.log('Database connection failed with the following error: ' + error);
      }
      else {
         console.log('Database connection successful.');
      }
   }
);

app.use('/movies', require('./backend/routes/movies'));

app.use('/persons', require('./backend/routes/persons'));