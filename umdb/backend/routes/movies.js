var express = require('express');

var router = express.Router();

const mongoose = require('mongoose');

require('../models/movie')(mongoose);

const Movie = mongoose.model('Movie');

router.get('/', (request, response, next) => {
    Movie.find().then(movies => {
        return response.status(200).json(movies);
    }).catch(error => {
        return response.status(500).json(error);
    });
});

router.post('/', (request, response, next) => {
    const movie = new Movie(request.body);

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

router.get('/:id', (request, response, next) => {
    Movie.findOne({_id: request.params.id}).then(movie => {
        return response.status(200).json(movie);
    })
    .catch(error => {
        return response.status(500).json({
            success: false,
            message: 'An error occurred while trying to get the movie',
            error: error
        });
    });
});

router.delete('/:id', (request, response, next) => {
    Movie.deleteOne({_id: request.params.id}).then(() => {
        return response.status(204).json({
            success: true,
            message: 'Movie deleted successfully'
        });
    })
    .catch(error => {
        return response.status(500).json({
            success: false,
            message: 'An error occurred while trying to delete the movie',
            error: error
        });
    });
});

router.put('/:id', (request, response, next) => {
    Movie.updateOne({_id: request.params.id}, request.body).then(() => {
        return response.status(200).json({
            success: true,
            message: 'Movie updated successfully'
        });
    })
    .catch(error => {
        return response.status(500).json({
            success: false,
            message: 'An error occurred while trying to update the movie',
            error: error
        });
    });
});

module.exports = router; 