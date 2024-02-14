const express = require('express');
const genres = require('../routes/genres');
const customers = require('../routes/customers');
const movies = require('../routes/movies');
const rentals = require('../routes/rentals');
const users = require('../routes/users');
const auth = require('../routes/auth');
const home = require('../routes/home');
const error = require('../middleware/error')

module.exports = function(app) {
    app.use(express.json());
    app.use('https://f300-102-88-33-139.ngrok-free.app/api/genres', genres);
    app.use('https://f300-102-88-33-139.ngrok-free.app/api/customers', customers);
    app.use('https://f300-102-88-33-139.ngrok-free.app/api/movies', movies);
    app.use('https://f300-102-88-33-139.ngrok-free.app/api/rentals', rentals);
    app.use('https://f300-102-88-33-139.ngrok-free.app/api/users', users);
    app.use('https://f300-102-88-33-139.ngrok-free.app/api/auth', auth);
    app.use('https://f300-102-88-33-139.ngrok-free.app', home);
    app.use(error)
}