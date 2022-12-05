var express = require('express');

var router = express.Router();

const mongoose = require('mongoose');

require('../models/person')(mongoose);

const Person = mongoose.model('Person');

router.get('/', (request, response, next) => {
    Person.find().then(persons => {
        return response.status(200).json(persons);
    }).catch(error => {
        return response.status(500).json(error);
    });
});

router.post('/', (request, response, next) => {
    const person = new Person(request.body);

    person.save()
        .then(person => {
            return response.status(201).json({
                success: true,
                message: 'Person added successfully',
                person: person
            });
        })
        .catch(error => {
            return response.status(500).json({
                success: false,
                message: 'An error occurred while trying to add the person',
                error: error
            });
        });
});

router.get('/:id', (request, response, next) => {
    Person.findOne({_id: request.params.id}).then(person => {
        return response.status(200).json(person);
    })
    .catch(error => {
        return response.status(500).json({
            success: false,
            message: 'An error occurred while trying to get the person',
            error: error
        });
    });
});

router.delete('/:id', (request, response, next) => {
    Person.deleteOne({_id: request.params.id}).then(() => {
        return response.status(204).json({
            success: true,
            message: 'Person deleted successfully'
        });
    })
    .catch(error => {
        return response.status(500).json({
            success: false,
            message: 'An error occurred while trying to delete the person',
            error: error
        });
    });
});

router.put('/:id', (request, response, next) => {
    Person.updateOne({_id: request.params.id}, request.body).then(() => {
        return response.status(200).json({
            success: true,
            message: 'Person updated successfully'
        });
    })
    .catch(error => {
        return response.status(500).json({
            success: false,
            message: 'An error occurred while trying to update the person',
            error: error
        });
    });
});

module.exports = router; 