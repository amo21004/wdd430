var express = require('express');

var router = express.Router();

const mongoose = require('mongoose');

require('../models/movie')(mongoose);

const Movie = mongoose.model('Movie');

router.get('/', (request, response, next) => {
    Movie.find().populate('actors').then(movies => {
        return response.status(200).json(movies);
    }).catch(error => {
        return response.status(500).json(error);
    });
});

router.post('/', (request, response, next) => {
    const movie = new Movie({
        title: request.body.title,
        summary: request.body.summary,
        release_date: request.body.release_date
    });

    movie.save()
        .then(movie => {
            return response.status(201).json({
                success: true,
                message: 'Movie added successfully',
                movie: movie
            });
        })
        .catch(error => {
            return response.status(500).json({
                success: false,
                message: 'An error occurred while trying to add the movie',
                error: error
            });
        });
});

router.delete('/:id', (request, response, next) => {
    Movie.deleteOne({_id: request.params.id}).then(result => {
        return response.status(204);
    });
});

module.exports = router; 