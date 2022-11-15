const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use((request, response, next) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept-Header');
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
    next();
});

app.post('/api/posts', (request, response, next) => {
    const post = request.body;

    console.log(post);

    response.status(201).json({
        message: 'Post addedd successfully'
    });
});

app.get('/api/posts', (request, response, next) => {
    const posts = [
        {
            id: 1,
            title: 'First server side post',
            content: 'This is the first post coming from the server'
        },
        {
            id: 2,
            title: 'Second server side post',
            content: 'This is the second post coming from the server'
        }
    ];

    return response.status(200).json({
        message: 'Posts fetched successfully',
        posts: posts
    });
});

module.exports = app;