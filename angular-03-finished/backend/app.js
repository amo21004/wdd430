const express = require('express');

const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const postsRoutes = require('./routes/posts');

const app = express();

mongoose.connect("mongodb+srv://naif:qJZbY6pvn31visHJ@cluster0.k2pxs1k.mongodb.net/node-angular?retryWrites=true&w=majority").then(() => {
    console.log('connected');
}).catch(() => {
    console.log('failed to connect');
});

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use((request, response, next) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept-Header');
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    next();
});

app.use('/api/posts', postsRoutes);

module.exports = app;