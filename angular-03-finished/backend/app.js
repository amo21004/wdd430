const express = require('express');

const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const Post = require('./models/post');

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
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
    next();
});

app.post('/api/posts', (request, response, next) => {
    const post = new Post({
        title: request.body.title,
        content: request.body.content
    });

    post.save().then(createdPost => {
        response.status(201).json({
            message: 'Post addedd successfully',
            postId: createdPost._id
        });
    });
});

app.get('/api/posts', (request, response, next) => {
    Post.find().then(
        (documents) => {
            return response.status(200).json({
                message: 'Posts fetched successfully',
                posts: documents
            });
        }
    );
});

app.delete('/api/posts/:id', (request, response, next) => {
    Post.deleteOne({_id: request.params.id}).then((result) => {
        response.status(200).json({message: 'Post deleted!'});
    });

    response.status(200).json({message: 'Post deleted!'});
});

module.exports = app;