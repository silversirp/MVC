const express = require('express');
const app = express();

// Set up the view engine to use Pug
app.set('view engine', 'pug');

// Set up a route to render the home page using Pug
app.get('/', (req, res) => {
    res.render('index', { title: 'Items Repository' });
});

// Start the server
app.listen(3001, () => {
    console.log('Server started on port 3001 http://localhost:3001');
});
