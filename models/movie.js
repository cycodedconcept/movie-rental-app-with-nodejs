const { genreSchema } = require("./genre")
const mongoose = require('mongoose');
const Joi = require('joi');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        maxlength: 225
    },
    genre: {
        type: genreSchema,
        required: true
    },
    numberInStock: {
        type: Number,
        required: true,
        minlength: 0,
        maxlength: 225
    },
    dailyRentalRate: {
        type: Number,
        required: true,
        minlength: 0,
        maxlength: 225
    }
})

const Movie = mongoose.model('Movie', movieSchema)

function validateMovie(movie) {
    const schema = {
        title: Joi.string().min(4).required(),
        genreId: Joi.string().required(),
        numberInStock: Joi.number().min(0).required(),
        dailyRentalRate: Joi.number().min(0).required()
    }

    return Joi.validate(movie, schema);
}

exports.Movie = Movie;
exports.validate = validateMovie