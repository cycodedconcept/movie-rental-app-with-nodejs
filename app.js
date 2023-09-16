const mongoose = require('mongoose');
const express = require('express');
const genres = require('./routes/genres');
const customers = require('./routes/customers');
const home = require('./routes/home');
const app = express();

mongoose.connect('mongodb://localhost/vidly')
  .then(() => console.log("Connected to MongoDB..."))
  .catch(() => console.error("Could not connect to MongoDB..."));

app.use(express.json());
app.use('/api/movies', genres);
app.use('/api/customers', customers);
app.use('/', home);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`listening on port ${port}...`)
});